<template>
  <div>
    <div class="banner" @click="bannerClick">
      <img class="banner-img" :src="bannerImg" />
      <div class="banner-info">
        <div class="banner-title">{{this.sightName}}</div>
        <div class="banner-number">
          <span class="iconfont icon-tupian icons-1"></span>
          &nbsp;&nbsp;{{this.gallaryImgs.length}}
        </div>
      </div>
    </div>
    <fade-animation>
      <public-gallary :imgs="gallaryImgs" v-show="showGallary" @close="gallaryClose"></public-gallary>
    </fade-animation>
  </div>
</template>

<script>
import publicGallary from '../../../public/gallary/gallary'
import fadeAnimation from '../../../public/fade/fade'
export default {
  name: 'detail-banner',
  props: {
    sightName: String,
    bannerImg: String,
    gallaryImgs: Array
  },
  data() {
    return {
      showGallary: false,
      imgs1: [
        'http://img1.qunarzz.com/sight/p0/1808/44/44dd7a3693c49370a3.img.jpg_r_800x800_28cac589.jpg',
        'http://img1.qunarzz.com/sight/p0/1808/87/87cbdaa2026fb344a3.img.jpg_r_800x800_b90a2011.jpg'
      ]
    }
  },
  methods: {
    bannerClick() {
      this.showGallary = true
    },
    gallaryClose() {
      this.showGallary = false
    }
  },
  components: {
    publicGallary,
    fadeAnimation
  }
}
</script>

<style lang="stylus" scoped>
.banner {
  position: relative;
  overflow: hidden;
  height: 0;
  padding-bottom: 55%;

  .banner-img {
    width: 100%;
  }

  .banner-info {
    display: flex;
    position: absolute;
    left: 0.2rem;
    right: 0.2rem;
    bottom: 0rem;
    min-height: 0.4rem;
    line-height: 0.6rem;
    color: #fff;
    background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));

    .banner-title {
      position: relative;
      bottom: 0;
      z-index: 1;
      // line-height: 0.4rem;
      flex: 1;
      font-size: 0.36rem;
      text-shadow: 0 1px 2px rgba(0, 0, 0, 0.7);
    }

    .banner-number {
      padding: 0.05rem 0.4rem;
      height: 0.4rem;
      line-height: 0.4rem;
      border-radius: 0.4rem;
      background: rgba(0, 0, 0, 0.8);
      margin-left: 0.1rem;

      .icons-1 {
        font-size: 0.24rem;
        left: 0.1rem;
      }
    }
  }
}
</style>
