<template>
  <div>
    <div class="header">
      <div class="header-back">
        <router-link to="/">
          <div class="iconfont icon-jiantou icon-back unc"></div>
        </router-link>
      </div>
      <div>城市选择</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'city-header'
}
</script>

<style lang="stylus" scoped>
.header {
  position: relative;
  overflow: hidden;
  height: 0.86rem;
  line-height: 0.86rem;
  text-align: center;
  color: #fff;
  background: #00bcd4;
  font-size: 0.32rem;

  .header-back {
    position: absolute;
    top: 0;
    left: 0;
    width: 0.64rem;
    text-align: center;
    font-size: 0.4rem;
    color: #fff;

    .unc {
      color: #fff;
    }
  }
}
</style>
