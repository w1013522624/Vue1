<template>
  <div>
    <detail-banner :sightName="sightName" :bannerImg="bannerImg" :gallaryImgs="gallaryImgs"></detail-banner>
    <detail-header></detail-header>
    <div class="content">
      <detail-list :list="list"></detail-list>
    </div>
  </div>
</template>

<script>
import detailBanner from './components/bannner'
import detailHeader from './components/header'
import detailList from './components/list'
import axios from 'axios'

var log = console.log.bind(console)
export default {
  name: 'Detail',
  components: {
    detailBanner,
    detailHeader,
    detailList
  },
  data() {
    return {
      sightName: '',
      bannerImg: '',
      gallaryImgs: [],
      list: []
    }
  },
  methods: {
    getDetailInfo() {
      // axios.get('./api/detail.json?id=' + this.$route.params.id)
      axios
        .get('/api/detail.json', {
          params: {
            id: this.$route.params.id
          }
        })
        .then(this.getDetailSucc)
    },
    getDetailSucc(res) {
      let res1 = res.data
      if (res1.ret && res1.data) {
        let data1 = res1.data
        // log(' 123', data1)
        this.sightName = data1.sightName
        this.bannerImg = data1.bannerImg
        this.gallaryImgs = data1.gallaryImgs
        this.list = data1.categoryList
      }
    }
  },
  mounted() {
    this.getDetailInfo()
  }
}
</script>

<style lang="stylus" scoped>
.content {
  height: 50rem;
}
</style>
