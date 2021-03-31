<template>
    <div class="card-list">
        <ul v-if="!errorMessage">
            <li class="card-item" v-for="item in data" :key="item.id">
                <p>
                    <router-link class="word" :to="'/word/'+item.id" :data="item.id"
                    ><b class="pb-10">{{item.word}}</b> <i class="pb-10">{{item.partOfSpeech}}</i>
                    {{item.text}} </router-link>
                    <img v-if="!item.favorites" @click="add(item)" class="btn-stars-active" src="../assets/star-outline.svg">
                    <img v-else @click="del(item)" class="btn-stars-active" src="../assets/star-blue.svg">
                </p>
            </li>
        </ul>
        <div v-else>
            <p class="card-item card-error">{{errorMessage}}</p>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from "vuex";
    export default {
        props: ['data'],
        name: 'List.vue',
        computed: mapGetters(['errorMessage']),
        methods: {
            add(item) {
                this.$store.dispatch('addWord', item)
                this.$forceUpdate()
            },
            del(item) {
                this.$store.dispatch('delWord', item)
                this.$forceUpdate()
            }
        }
    }
</script>