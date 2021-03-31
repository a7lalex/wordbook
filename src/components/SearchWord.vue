<template>
    <form class="card-search" @submit.prevent="Search()">
        <div class="card-relative">
            <input
                v-model="word"
                type="text">
            <div class="btn-search" type="sybmit" @click="Search()"><img src="../assets/magnify.svg"></div>
        </div>
    </form>
</template>

<script>
import {mapActions} from 'vuex'
export default {
    name: 'SearchWord.vue',
    data(){
        return {
            word: '',
        }
    },
    watch: {
        /*word() {
            this.searchWord()
        }*/
    },
    methods: {
        ...mapActions(['searchWord','addWord','delWord']),
        Search() {
            this.$store.dispatch('searchWord', this.word)
        },
    }
}
</script>
