<template>
  <ul class="list">
    <li
      class="item"
      v-for="item of letters"
      :key="item"
      :ref="item"
      @click="clickLetter"
      @touchstart.prevent="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
    >{{item}}</li>
  </ul>
</template>

<script>
// import Bscroll from 'better-scroll'
var log = console.log.bind(console)
export default {
  name: 'city-alphabet',
  props: {
    cities: Object
  },
  computed: {
    letters() {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  updated() {
    this.startY = this.$refs['A'][0].offsetTop
  },
  data() {
    return {
      touchStatus: false,
      timer: null
    }
  },
  methods: {
    clickLetter(event) {
      this.$emit('change1', event.target.innerText)
    },
    handleTouchStart() {
      this.touchStatus = true
    },
    handleTouchMove(e) {
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          const clientY = e.touches[0].clientY - 79
          const index = Math.floor((clientY - this.startY) / 20)
          if (index >= 0 && index < this.letters.length) {
            this.$emit('change1', this.letters[index])
          }
        }, 16)
      }
    },
    handleTouchEnd() {
      this.touchStatus = false
    }
  }
}
</script>

<style lang="stylus" scoped>
.list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 1.6rem;
  right: 0;
  bottom: 0;
  width: 0.4rem;

  // background: lightblue;
  .item {
    line-height: 0.4rem;
    text-align: center;
    color: #00bcd4;
  }
}
</style>
