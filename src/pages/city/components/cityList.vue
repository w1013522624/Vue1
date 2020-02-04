<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="btn-list">
          <div class="btn-wrapper">
            <div class="btn">{{this.$store.state.city}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="btn-list">
          <div
            class="btn-wrapper"
            v-for="item of hotCity"
            :key="item.id"
            @click="cityClick1(item.name)"
          >
            <div class="btn">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(item, key) of cities" :key="key" :ref="key">
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list" v-for="item1 of item" :key="item1.id" @click="cityClick1(item1.name)">
          <div class="item border-bottom">{{item1.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
var log = console.log.bind(console)
export default {
  name: 'city-list',
  props: {
    hotCity: Array,
    cities: Object,
    letter: String
  },
  methods: {
    cityClick1(city) {
      this.$store.dispatch('changeCity', city)
      this.$router.push('/')
    }
  },
  // 在 dom 挂载完毕后执行
  mounted() {
    this.scroll = new Bscroll(this.$refs.wrapper)
  },
  watch: {
    letter() {
      if (this.letter) {
        const e = this.$refs[this.letter][0]
        this.scroll.scrollToElement(e)
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.border-topbottom {
  &:before {
    border-color: #ccc;
  }

  &:after {
    border-color: #ccc;
  }
}

.border-bottom {
  &:before {
    border-color: #ccc;
  }
}

.list {
  overflow: hidden;
  background: light;
  position: absolute;
  top: 1.58rem;
  left: 0;
  right: 0;
  bottom: 0;

  .title {
    line-height: 0.6rem;
    background: #eee;
    padding-left: 0.2rem;
    color: #666;
  }

  .item-list {
    .item {
      line-height: 0.76rem;
      color: #666;
      padding-left: 0.2rem;
    }
  }

  .btn-list {
    overflow: hidden;
    padding: 0.1rem 0.6rem 0.1rem 0.1rem;

    .btn-wrapper {
      float: left;
      width: 33.33%;

      .btn {
        margin: 0.1rem;
        padding: 0.1rem 0;
        text-align: center;
        border: 0.02rem solid #ccc;
        border-radius: 0.06rem;
      }
    }
  }
}
</style>
