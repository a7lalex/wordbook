<template>
  <div class="card">
    <SearchWord/>
    <ListWords :data="allWords"/>
  </div>
</template>

<script>
import SearchWord from "../components/Words/SearchWord";
import ListWords from "../components/Words/ListWord";
import {mapGetters,mapActions} from "vuex";
export default {
  name: 'Home',
  components: {SearchWord, ListWords},
  computed: mapGetters(['allWords']),
  mounted() {
    this.sesionWords()
  },
  methods: {
    ...mapActions(['sesionWords'])
  }
}
</script>
