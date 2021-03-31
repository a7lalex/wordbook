<template>
  <div class="card">
    <SearchWord/>
    <List :data="allWords"/>
  </div>
</template>

<script>
import SearchWord from "../components/SearchWord";
import List from "../components/List";
import {mapGetters} from "vuex";
export default {
  name: 'Home',
  components: {SearchWord, List},
  computed: mapGetters(['allWords'])
}
</script>
