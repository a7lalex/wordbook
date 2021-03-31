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
        },
        sesionFavorites({commit}) {
            commit('setFavorites')
        }
    },
    mutations: {
        addStar(state,word) {
            word.favorites = true
            state.favorites.push(word)
            localStorage.setItem('favorites', JSON.stringify(state.favorites))
        },
        delStar(state, word) {
            let index = state.favorites.findIndex(n => n.id === word.id)
            if (index !== -1) {
                word.favorites = false
                state.favorites.splice(index, 1)
                localStorage.setItem('favorites', JSON.stringify(state.favorites))
            }
        },
        setFavorites(state) {
            if (window.localStorage.favorites) {
                state.favorites = JSON.parse(window.localStorage.getItem('favorites'))
            }
        }
    },
    getters: {
        allFavorites(state) {
            return state.favorites
        }
    },
}