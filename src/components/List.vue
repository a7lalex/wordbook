<template>
    <div class="card-list">
        <ul class="list" v-if="!errorMessage">
            <draggable>
                <li
                    class="list-item"
                    v-for="item in data"
                    :key="item.id">
                    <div class="list-string">
                        <router-link
                        class="list-link"
                        :to="'/word/'+item.id"
                        :data="item.id">
                            <b>{{item.word}}</b>
                            <i>{{item.partOfSpeech}}</i>
                            {{item.text}} </router-link>
                        <img v-if="!item.favorites"
                             @click="add(item)"
                             class="btn btn-stars-active"
                             src="../assets/img/star-outline.svg">
                        <img v-else
                             @click="del(item)"
                             class="btn btn-stars-active"
                             src="../assets/img/star-blue.svg">
                    </div>
                </li>
            </draggable>
        </ul>
        <div class="list" v-else>
            <p class="list-item list-error">{{errorMessage}}</p>
        </div>
    </div>
</template>

<script>
    import draggable from 'vuedraggable'
    import {mapGetters, mapActions} from "vuex";
    export default {
        props: ['data'],
        name: 'List.vue',
        computed: {
            ...mapGetters(['errorMessage']),
        },
        components: {
            draggable
        },
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