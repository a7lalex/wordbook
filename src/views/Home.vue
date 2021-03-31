<template>
  <div class="card">
    <SearchWord/>
    <List :data="allWords"/>
  </div>
</template>

<script>
import SearchWord from "../components/SearchWord";
import List from "../components/List";
import {mapGetters,mapActions} from "vuex";
export default {
  name: 'Home',
  components: {SearchWord, List},
  computed: mapGetters(['allWords']),
  mounted() {
    this.sesionWords()
  },
  methods: {
    ...mapActions(['sesionWords'])
  }
}
</script>
