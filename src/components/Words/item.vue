<template>
    <div class="list-string">
        <router-link class="list-link" :to="'/word/'+item.id" :data="item.id"><b>{{item.word}}</b> <i>{{item.partOfSpeech}}</i>{{item.text}}</router-link>

        <img v-if="!item.favorites"
             @click="add(item)"
             class="btn btn-stars-active"
             src="../../assets/img/star-outline.svg">
        <img v-else
             @click="del(item)"
             class="btn btn-stars-active"
             src="../../assets/img/star-blue.svg">
    </div>
</template>
<script>
    import {mapActions} from "vuex";
    export default {
        props: ['item'],
        methods: {
            ...mapActions(['addWord','delWord']),
            add(item) {
                this.$store.dispatch('addWord', item)
                this.$forceUpdate()
            },
            del(item) {
                this.$store.dispatch('delWord', item)
                this.$forceUpdate()
            },
        }
    }
</script>