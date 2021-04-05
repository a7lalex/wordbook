<template>
    <form class="card-search" @submit.prevent="Search()">
        <div class="card-relative">
            <input
                v-model="word"
                type="text">
            <div class="btn btn-search" type="sybmit" @click="Search()"><img src="../../assets/img/magnify.svg"></div>
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
    methods: {
        ...mapActions(['searchWord']),
        Search() {
            this.$store.dispatch('searchWord', this.word)
        },
    }
}
</script>
