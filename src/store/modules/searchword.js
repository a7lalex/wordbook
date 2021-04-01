// api key https://api.wordnik.com/v4/word.json/rainbow/relatedWords?useCanonical=false&limitPerRelationshipType=10&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5
export default {
    state: {
        favorites: [],
        message: '',
        words: [],
        apikey: 'a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5',
        url: 'https://api.wordnik.com/v4/word.json/',
        limit: '3'
    },
    actions: {
        async searchWord({commit, state}, word) {
            const res = await fetch(
                state.url + word +'/definitions?limit='+state.limit+'&api_key='+state.apikey
            )
            const words = await res.json()
            commit('updateWords', words)

            console.log('words: ',words)
        },
        sesionWords({commit}) {
            commit('setWords')
        },
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
        updateWords(state, words) {
            state.words = words
            if(words.message !== undefined) {
                state.message = words.message
                localStorage.setItem('message', JSON.stringify(state.message))
            } else {
                state.message = ''
                localStorage.removeItem('message', JSON.stringify(state.message))
            }
        },
        setWords(state) {
            if (window.localStorage.words) {
                state.words = JSON.parse(window.localStorage.getItem('words'))
            }
            if (window.localStorage.message && state.message !== undefined) {
                state.message = JSON.parse(window.localStorage.getItem('message'))
            }
        },
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
        allWords(state) {
            return state.words
        },
        errorMessage(state) {
            return state.message
        },
        allFavorites(state) {
            return state.favorites
        }
    }
}