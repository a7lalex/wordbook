export default {
    state: {
        favorites: []
    },
    actions: {
        addWord({commit},word) {
            commit('addStar',word)
        },
        delWord({commit}, word) {
            commit('delStar', word)
        }
    },
    mutations: {
        addStar(state,word) {
            word.favorites = true
            state.favorites.push(word)
        },
        delStar(state, word) {
            let index = state.favorites.findIndex(n => n.id === word.id);
            if (index !== -1) {
                word.favorites = false
                state.favorites.splice(index, 1)
            }
        }
    },
    getters: {
        allFavorites(state) {
            return state.favorites
        }
    },
}