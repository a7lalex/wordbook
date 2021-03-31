<template>
  <div class="card">
    <SearchWord/>
    <List :data="allFavorites"/>
  </div>
</template>

<script>
  import SearchWord from "../components/SearchWord";
  import List from "../components/List";
  import {mapGetters} from "vuex";
  export default {
    name: 'StarredWords',
    components: {SearchWord, List},
    computed: mapGetters(['allFavorites'])
  }
</script>
