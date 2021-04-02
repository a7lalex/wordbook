<template>
    <div id="nav">
        <router-link to="/">Word Keeper</router-link>
        <router-link to="/favorites">
            <img src="../assets/img/star.svg">
            Starred Words</router-link>
    </div>
</template>

<script>
    export default {
        name: 'Nav.vue'
    }
</script>
