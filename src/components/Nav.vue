<template>
    <div id="nav">
        <router-link to="/">Word Keeper</router-link>
        <router-link to="/about">
            <img class="pb-10" src="../assets/img/star.svg">
            Starred Words</router-link>
    </div>
</template>

<script>
    export default {
        name: 'Nav.vue'
    }
</script>
