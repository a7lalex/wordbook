<template>
  <div class="card">
    <SearchFavorites/>
    <ListFavorites :list="allFavorites"/>
  </div>
</template>

<script>
  import SearchFavorites from "../components/Favorites/SearchFavorites";
  import ListFavorites from "../components/Favorites/ListFavorites";
  import {mapGetters} from "vuex";
  export default {
    name: 'Favorites',
    components: {ListFavorites, SearchFavorites},
    computed: mapGetters(['allFavorites']),
  }
</script>
