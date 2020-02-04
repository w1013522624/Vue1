<template>
  <div>
    <home-header></home-header>
    <home-swiper :slist="swiperList"></home-swiper>
    <home-icons :iconList="iconList"></home-icons>
    <home-recommend :rlist="recommendList"></home-recommend>
    <home-weekend :wlist="weekendList"></home-weekend>
  </div>
</template>

<script>
import homeHeader from './components/header.vue'
import homeSwiper from './components/swiper.vue'
import homeIcons from './components/icons.vue'
import homeRecommend from './components/recommend.vue'
import homeWeekend from './components/weekend.vue'
import { mapState } from 'vuex'
// 引入 axios 发送 ajax
import axios from 'axios'
var log = console.log.bind(console)
export default {
  name: 'Home2',
  components: {
    homeHeader,
    homeSwiper,
    homeIcons,
    homeRecommend,
    homeWeekend
  },
  data() {
    return {
      lastCity: '',
      // city: '',
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    }
  },
  computed: {
    ...mapState(['city'])
  },
  methods: {
    getHomeInfo() {
      axios.get('/api/index.json?city=' + this.city)
        .then(this.getHomeInfoSucceed)
    },
    getHomeInfoSucceed(res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        // this.city = data.city
        this.swiperList = data.swiperList
        this.iconList = data.iconList
        this.recommendList = data.recommendList
        this.weekendList = data.weekendList
      }
      log(res)
    }
  },
  mounted() {
    this.lastCity = this.city
    // log('mounted')
    this.getHomeInfo()
  },
  activated() {
    if (this.lastCity !== this.city) {
      this.lastCity = this.city
      this.getHomeInfo()
    }
    // log('activated')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
