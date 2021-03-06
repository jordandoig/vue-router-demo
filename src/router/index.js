import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Cat from '@/components/Cat'
import Dog from '@/components/Dog'
import DogHome from '@/components/DogHome'
import MysteryDog from '@/components/MysteryDog'
import Toys from '@/components/Toys'
import Treats from '@/components/Treats'
import NoTreats from '@/components/NoTreats'
import NotFound from '@/components/NotFound'

Vue.use(Router)

const knownDogs = [
  'Carlos',
  'Tino'
]

const goodDogs = [
  'Carlos'
]

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        logRouting: true
      }
    },
    // Dynamic Route Matching
    {
      // Regex matching, this requires 'name' to consist of letters only
      path: '/dogs/:name([a-zA-Z]+)',
      // Aliasing allows multiple routes to display the same component without redirecting
      alias: ['/dog/:name', '/d/:name'],
      component: Dog,
      beforeEnter (to, from, next) {
        if (knownDogs.includes(to.params.name)) {
          next()
        } else {
          next({name: 'MysteryDog'})
        }
      },
      // Nested routes
      children: [
        {
          path: '',
          name: 'DogHome',
          component: DogHome
        },
        {
          path: 'toys',
          name: 'DogToys',
          // Named Views assign multiple components
          components: {
            default: DogHome,
            extras: Toys
          }
        },
        {
          path: 'treats',
          name: 'DogTreats',
          // Redirect to path, named route, or dynamically
          // redirect: 'toys'
          // redirect: { name: 'DogHome' }
          redirect: to => {
            if (goodDogs.includes(to.params.name)) {
              return { name: 'HiddenTreats' }
            } else {
              return { name: 'NoTreats' }
            }
          }
        },
        {
          path: 'hidden-treats',
          name: 'HiddenTreats',
          components: {
            default: DogHome,
            extras: Treats
          }
        },
        {
          path: 'no-treats',
          name: 'NoTreats',
          components: {
            default: DogHome,
            extras: NoTreats
          }
        }
      ]
    },
    {
      path: '/dogs/mystery',
      name: 'MysteryDog',
      component: MysteryDog
    },
    {
      path: '/cats/:name',
      name: 'Cat',
      component: Cat,
      // Props as a boolean sets all route params as props
      // props: true,
      // Props as an object for setting static props
      // props: { selfCleaning: true },
      // Using props as a function
      props: route => ({
        name: route.params.name,
        imgPath: require('@/assets/' + route.params.name + '.jpg')
      })
    },
    {
      path: '*',
      name: '404',
      component: NotFound
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.logRouting)) {
    console.log('routing queued...')
  }
  next()
})

router.beforeResolve((to, from, next) => {
  if (to.matched.some(record => record.meta.logRouting)) {
    console.log('routing in progress...')
  }
  next()
})

router.afterEach((to, from) => {
  if (to.matched.some(record => record.meta.logRouting)) {
    console.log('routing successful!')
  }
})

export default router
