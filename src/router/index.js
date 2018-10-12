import Vue from 'vue'
import Router from 'vue-router'

import HomePage from '../pages/HomePage'
import SecondPage from '../pages/SecondPage'


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: HomePage
    },
    {
      path:'/router/:id',
      component:SecondPage
    }

  ]
})
