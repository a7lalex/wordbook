<template>
  <div class="home">
    <SearchWord></SearchWord>
    <!--ul>
      <li v-for="item in words" :key="item.id">
        <p><b>{{item.word}}</b> {{item.partOfSpeech}} {{item.text}}</p>
      </li>
    </ul-->
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
// api key https://api.wordnik.com/v4/word.json/rainbow/relatedWords?useCanonical=false&limitPerRelationshipType=10&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5
import SearchWord from "../components/SearchWord";
export default {
  name: 'Home',
  components: {SearchWord},
  data() {
    return {
      favorites: [],
      words: [
        {
          id: '1',
          word: 'freedom',
          partOfSpeech: 'adjective',
          text: 'the quality or state of being free: such as',
        },
        {
          id: '2',
          word: 'rock',
          partOfSpeech: 'verb',
          text: 'to move back and forth in or as if in a cradle',
        },
        {
          id: '3',
          word: 'lazy',
          partOfSpeech: 'adjective',
          text: 'disinclined to activity or exertion : not energetic or vigorous',
        },
        {
          id: '4',
          word: 'premonition',
          partOfSpeech: 'adjective',
          text: 'previous notice or warning',
        },
        {
          id: '5',
          word: 'introduce',
          partOfSpeech: 'verb',
          text: 'to lead to or make known by a formal act, announcement, or ...',
        },
      ],
      apikey: 'a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5',
      url: 'https://api.wordnik.com/v4/words.json/'
    }
  },
  async mounted() {
    /*const res = await fetch(
  this.url +'randomWords?hasDictionaryDef=true&includePartOfSpeech=adjective,verb,noun&minCorpusCount=0&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=5&maxLength=-1&sortBy=count&sortOrder=asc&limit=10&api_key='+this.apikey
    )
    const words = await res.json()
    this.words = words
    for (var i = 0; i < this.words.length; i++) {
      console.log(this.words[i])
      //this.partOfSpeech(this.words[i])
    }*/
  },
  methods: {
    async partOfSpeech(text) {
      const res = await fetch(
  'https://api.wordnik.com/v4/word.json/'+text.word+'/definitions?limit=1&api_key='+this.apikey
      )
      const Speech = await res.json()
      text.partOfSpeech = Speech.partOfSpeech
    }
  }
}
</script>
