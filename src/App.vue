<template>
  <div id="app">
    <Nav/>
    <router-view/>
  </div>
</template>
<script>
  import Nav from './components/Nav';
  import {mapActions} from "vuex";
  export default {
    components: {Nav},
    mounted() {
      this.session()
    },
    methods: {
      ...mapActions(['session']),
      session() {
        this.$store.dispatch('session')
      }
    }
  }
</script>