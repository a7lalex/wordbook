<template>
    <div class="card-list">
        <ul class="list" v-if="!errorMessage">
            <li class="list-item" v-for="item in data" :key="item.id">
                <item :item="item"/>
            </li>
        </ul>
        <div class="list" v-else>
            <p class="list-item list-error">{{errorMessage}}</p>
        </div>
    </div>
</template>
<script>
    import {mapGetters} from 'vuex'
    import Item from "./item";
    export default {
        props: ['data'],
        name: 'ListWords.vue',
        components: {Item},
        computed: mapGetters(['errorMessage']),
    }
</script>