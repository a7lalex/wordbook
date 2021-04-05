<template>
    <form class="card-search" @submit.prevent="SearchFavorites()">
        <div class="card-relative">
            <input
                v-model="word"
                type="text">
            <div class="btn btn-search" type="sybmit" @click="SearchFavorites()">
                <img src="../../assets/img/magnify.svg">
            </div>
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
            word() {
                this.SearchFavorites()
            }
        },
        methods: {
            ...mapActions(['searchWord']),
            SearchFavorites() {
                this.$store.dispatch('searchFavorites', this.word)
            },
        },
    }
</script>
