import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Cat from '@/components/Cat'
import Dog from '@/components/Dog'
import DogHome from '@/components/DogHome'
import MysteryDog from '@/components/MysteryDog'
import Toys from '@/components/Toys'
import NotFound from '@/components/NotFound'

Vue.use(Router)

const knownDogs = [
  'Carlos',
  'Tino'
]

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    // Dynamic Route Matching
    {
      path: '/dogs/:name',
      name: 'Dog',
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
          components: {
            default: DogHome,
            extras: Toys
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
      component: Cat
    },
    {
      path: '*',
      name: '404',
      component: NotFound
    }
  ]
})
