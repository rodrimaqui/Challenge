import Vue from 'vue'
import Router from 'vue-router'

import allCards from '../components/rm-allCards.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'allCards',
      component: allCards
    }
  ]
})
