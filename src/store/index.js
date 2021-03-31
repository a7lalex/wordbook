import Vue from 'vue'
import Vuex from 'vuex'
import favorites from "./modules/favorites"
import searchword from "./modules/searchword"

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    favorites,
    searchword
  }
})
