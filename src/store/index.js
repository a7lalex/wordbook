import Vue from 'vue'
import Vuex from 'vuex'
//import favorites from "./modules/favorites"
import searchword from "./modules/searchword"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      /*favorites: [],
      message: '',
      words: [],*/
      limit: '10',
  },
  actions: {
    search({state},word) {
        return fetch('https://api.wordnik.com/v4/word.json/' + word +'/definitions?limit='+state.limit+'&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5')
    },
  },
  modules: {
    //favorites,
    searchword
  }
})
