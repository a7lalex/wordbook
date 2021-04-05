<template>
  <div class="card">
    <SearchWord/>
    <List :data="allFavorites"/>
  </div>
</template>

<script>
  import SearchWord from "../components/Words/SearchWord";
  import List from "../components/List";
  import {mapGetters,mapActions} from "vuex";
  export default {
    name: 'StarredWords',
    components: {List, SearchWord},
    computed: mapGetters(['allFavorites']),
    mounted() {
      this.sesionFavorites()
    },
    methods: mapActions(['sesionFavorites']),
  }
</script>
