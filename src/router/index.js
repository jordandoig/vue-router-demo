import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Cat from '@/components/Cat'
import Dog from '@/components/Dog'
import MysteryDog from '@/components/MysteryDog'
import NotFound from '@/components/NotFound'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    // Dynamic Route Matching (with route watch)
    {
      path: '/dogs/:name',
      name: 'Dog',
      component: Dog
    },
    // Dynamic Route Matching (without route watch)
    {
      path: '/cats/:name',
      name: 'Cat',
      component: Cat
    },
    {
      path: '/dogs/*',
      name: 'MysteryDog',
      component: MysteryDog
    },
    {
      path: '*',
      name: '404',
      component: NotFound
    }
  ]
})
