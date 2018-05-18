
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({

    state:{
      cards: [],
      active: ''

    },
    mutations:{

        saveCards(state,cardsArray){
            state.cards = cardsArray;
        },
        statusSearch(state,active){
            state.active = active;
        }
    }
});
