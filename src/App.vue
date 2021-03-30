<template>
  <div id="app">
    <Nav/>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #f8f4f4;
  padding: 10px;
  border-radius: 5px;
  min-height: 300px;
}

#nav {
  padding: 10px;
  background: #6ec0fb;
  display: flex;
  justify-content: space-between;
  border-radius: 5px;

  a {
    font-size: 24px;
    font-weight: bold;
    color: whitesmoke;
    text-decoration: none;

    &.router-link-exact-active {
      color: #fff;
    }
  }
}
</style>
<script>
  import Nav from './components/Nav';
  export default {
    components: {Nav}
  }
</script>