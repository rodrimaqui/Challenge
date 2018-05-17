import Vue from 'vue'
import Router from 'vue-router'

import rmAllCards from '../components/rm-allCards.vue'
import rmOneCard from '../components/rm-oneCard.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'rmAllCards',
      component: rmAllCards
    },
    {
      path:'/:id',
      name: 'rmOneCard',
      component: rmOneCard
    }
  ]
})
