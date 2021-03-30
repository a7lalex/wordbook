<template>
    <div class="card">
        <form class="card-search" @submit.prevent="searchWord()">
            <input
                v-model="word"
                type="text">
        </form>
        <ul class="card-list" v-if="!message">
            <li v-for="item in result" :key="item.id">
                <p><b>{{item.word}}</b> <i>{{item.partOfSpeech}}</i> {{item.text}}</p>
            </li>
        </ul>
        <div class="card-list" v-else>
            <p class="card-error">{{message}}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SearchWord.vue',
    data(){
        return {
            message: '',
            word: '',
            result: [],
            apikey: 'a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5',
            url: 'https://api.wordnik.com/v4/word.json/',
            limit: '3'
        }
    },
    watch: {
        /*word() {
            this.searchWord()
        }*/
    },
    methods: {
        async searchWord() {
            const res = await fetch(
                this.url + this.word +'/definitions?limit='+this.limit+'&api_key='+this.apikey
            )
            const word = await res.json()
            this.result = word
            this.message = word.message

            console.log(word)
        }
    }
}
</script>

<style>
    p {
        white-space: nowrap; /* Запрещаем перенос строк */
        overflow: hidden; /* Обрезаем все, что не помещается в область */
        background: #fff; /* Цвет фона */
        padding: 10px; /* Поля вокруг текста */
        text-overflow: ellipsis; /* Добавляем многоточие */
        margin-top: 0;
    }
    .card {
        display: flex;
        width: 100%;
        padding-top: 30px;
        min-height: 200px;
    }
    .card-search {
        background: #efefef;
        padding: 20px;
        border-radius: 5px;
        width: 30%;
    }
    .card-search input {
        font-size: 20px;
        padding: 7px;
        border-radius: 5px;
        border: 1px solid #808080;
        outline: none;
        min-width: 100px;
        width: 100%;
        box-sizing: border-box;
    }
    .card-search input:focus {
        border: 1px solid #6ec0fb;
    }
    .card-list {
        list-style: none;
        text-align: left;
        padding: 0;
        margin: 0;
        width: 70%;
        border-radius: 5px;
        padding-left: 20px;
        box-sizing: border-box;
    }
    .card-error {
        padding: 10px;
        margin: 0;
        border-radius: 5px;
    }
</style>
