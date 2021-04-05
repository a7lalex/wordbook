import Vue from 'vue'
import Vuex from 'vuex'
import searchword from "./modules/searchword"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      limit: '10',
  },
  actions: {
    // api key https://api.wordnik.com/v4/word.json/rainbow/relatedWords?useCanonical=false&limitPerRelationshipType=10&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5
    search({state},word) {
        return fetch('https://api.wordnik.com/v4/word.json/' + word +'/definitions?limit='+state.limit+'&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5')
    },
  },
  modules: {
    searchword
  }
})
