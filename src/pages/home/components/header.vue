<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont icon-jiantou icon-back"></div>
    </div>
    <div class="header-input">
      <span class="iconfont icon-sousuo"></span>
      请输入城市 / 景点 / 主题
    </div>
    <router-link to="/city">
      <div class="header-right">
        <span class="font-city">
          <!-- {{this.$store.state.city}} -->
          {{this.city}}
        </span>
        <span class="iconfont icon-jiantouarrow486"></span>
      </div>
    </router-link>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Home2-header',
  computed: {
    ...mapState(['city'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
// @import '../../../assets/styles/varibles.styl'
// @import '~@/assets/styles/varibles.styl'
// 修改配置文件后
@import '~@style/varibles.styl';

.header {
  display: flex;
  line-height: 0.86rem;
  background: $bgColor;
  color: #fff;

  .header-left {
    width: 0.64rem;
    float: left;

    .icon-back {
      text-align: center;
      font-size: 0.4rem;
    }
  }

  .header-input {
    flex: 1;
    height: 0.64rem;
    line-height: 0.64rem;
    margin-top: 0.12rem;
    margin-left: 0.2rem;
    padding-left: 0.2rem;
    color: #ccc;
    background: #fff;
    border-radius: 0.1rem;
  }

  .header-right {
    min-width: 1.04rem;
    padding: 0 .1rem;
    float: right;
    text-align: center;
    color: #fff;

    .font-city {
      overflow: hidden;
      margin-left: -0.04rem;
      font-size: 0.3rem;
    }
  }
}
</style>
