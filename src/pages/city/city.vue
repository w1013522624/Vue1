<template>
  <div>
    <city-header></city-header>
    <city-search :cities="allCities"></city-search>
    <city-list :cities="allCities" :hotCity="hotCity" :letter="letter"></city-list>
    <city-alphabet :cities="allCities" @change1="chang2"></city-alphabet>
  </div>
</template>

<script>
import axios from 'axios'
import cityHeader from './components/header.vue'
import citySearch from './components/search.vue'
import cityList from './components/cityList.vue'
import cityAlphabet from './components/alphabet.vue'
var log = console.log.bind(console)
export default {
  name: 'city',
  components: {
    cityHeader,
    citySearch,
    cityList,
    cityAlphabet
  },
  data() {
    return {
      hotCity: [],
      allCities: {},
      letter: ''
    }
  },
  methods: {
    getCityInfo() {
      axios.get('/api/city.json').then(this.getInfoSucc)
    },
    getInfoSucc(res) {
      let res1 = res.data
      if (res1.ret && res1.data) {
        const res2 = res1.data
        this.allCities = res2.cities
        this.hotCity = res2.hotCities
      }
    },
    chang2(e) {
      this.letter = e
    }
  },
  mounted() {
    this.getCityInfo()
  }
}
</script>

<style lang="stylus" scoped></style>
