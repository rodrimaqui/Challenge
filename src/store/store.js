
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({

    state:{
      cards: [],

    },
    mutations:{

        saveCards(state,cardsArray){
            state.cards = cardsArray;
        }
    }
});
