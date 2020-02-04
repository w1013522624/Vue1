<template>
  <div>
    <div class="search">
      <input v-model="keyword" class="search-input" type="text" placeholder="请输入城市名或拼音" />
    </div>
    <div class="">
      <ul v-for="item of list" :key="item.id">
        <li>{{item.name}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
var log = console.log.bind(console)
export default {
  props: {
    cities: Object
  },
  name: 'city-search',
  data() {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  watch: {
    keyword() {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      this.timer = setTimeout(() => {
        const result1 = []
        for (let i in this.cities) {
          this.cities[i].forEach((res) => {
            if (res.spell.indexOf(this.keyword) > -1 || res.name.indexOf(this.keyword)) {
              result1.push(res)
              // log(res)
            }
          })
        }
        this.list = result1
      }, 100)
    }
  }
}
</script>

<style lang="stylus" scoped>
.search {
  height: 0.72rem;
  padding: 0 0.1rem;
  background: #00bcd4;

  .search-input {
    box-sizing: border-box;
    width: 100%;
    height: 0.62rem;
    padding: 0 0.1rem;
    line-height: 0.62rem;
    text-align: center;
    border-radius: 0.06rem;
  }
}

.search-content {
  z-index: 1;
  overflow: hidden;
  position: absolute;
  top: 1.58rem;
  left: 0;
  right: 0;
  bottom: 0;
  // background: lightgreen;
}
</style>
