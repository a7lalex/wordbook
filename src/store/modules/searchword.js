export default {
    state:{
        favorites: [],
        message: '',
        words: [],
        limit: '10'
    },
    actions: {
        async searchWord({ dispatch, commit}, word) {
            const res = await dispatch('search',word)
            const words = await res.json()

            for (var i = 0; i < words.length; i++) {
                if (words[i].id === undefined) {
                    words[i].id = String(Date.now()+i)
                }
                if (words[i].favorites === undefined) {
                    words[i].favorites = false
                }
            }
            commit('updateWords', words)
        },
        addWord({commit},word) {
            commit('addStar',word)
        },
        delWord({commit}, word) {
            commit('delStar', word)
        },
        session({commit}) {
            commit('sessionApp')
        },
        searchFavorites({commit}, word) {
            commit('Favorites',word)
        }
    },
    mutations: {
        updateWords(state, words) {
            state.words = words
            localStorage.setItem('words', JSON.stringify(state.words))
            if(words.message !== undefined) {
                state.message = words.message
                localStorage.setItem('message', JSON.stringify(state.message))
            } else {
                state.message = ''
                localStorage.setItem('message',state.message)
            }
        },
        addStar(state,word) {
            word.favorites = true
            let index = state.words.findIndex(n => n.id === word.id)

            if (index !== -1) {
                localStorage.setItem('words', JSON.stringify(state.words))
            }
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
            let i = state.words.findIndex(n => n.id === word.id)
            if (i !== -1) {
                state.words[i].favorites = false
                localStorage.setItem('words', JSON.stringify(state.words))
            }
        },
        sessionApp(state) {
            if (window.localStorage.words) {
                state.words = JSON.parse(window.localStorage.getItem('words'))
            }
            if (window.localStorage.favorites) {
                state.favorites = JSON.parse(window.localStorage.getItem('favorites'))
            }
            if (window.localStorage.message && state.message !== undefined) {
                state.message = JSON.parse(window.localStorage.getItem('message'))
            }
        },
        Favorites(state, text) {
            var title = text
            var arr = state.favorites
            return state.favorites.filter(function (elem) {
                console.log(elem.word.indexOf(text) > -1)
                if(title==='') {return state.favorites=arr}
                else {
                    return elem.word.indexOf(text) > -1
                }
            })
        }
    },
    getters: {
        allWords(state) {
            return state.words
        },
        errorMessage(state) {
            return state.message
        },
        allFavorites(state) {
            return state.favorites
        },
    }
}