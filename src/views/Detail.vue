<template>
    <div class="card-detail">
        <router-link to="/">назад к списку</router-link>
        <div v-for="(val, key) in getWord" :key="key">
            <b>{{ key }}:</b> {{ val }}
            <hr>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    export default {
        name: 'Detail',
        props: ['id'],
        computed: {
            ...mapGetters(['allWords']),
            getWord() {
                return this.allWords.find(n => n.id === this.id)
            }
        }
    }
</script>