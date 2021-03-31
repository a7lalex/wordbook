// api key https://api.wordnik.com/v4/word.json/rainbow/relatedWords?useCanonical=false&limitPerRelationshipType=10&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5
export default {
    state: {
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

            console.log(words)
        },
    },
    mutations: {
        updateWords(state, words) {
            state.words = words
            state.message = words.message
        }
    },
    getters: {
        allWords(state) {
            return state.words
        },
        errorMessage(state) {
            return state.message
        }
    }
}