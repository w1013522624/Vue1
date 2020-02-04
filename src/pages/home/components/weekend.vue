<template>
  <div>
    <div class="recommend-title">周末去哪儿</div>
    <ul>
      <li class="item border-bottom" v-for="(item) of wlist" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" />
          <div class="item-info">
            <p class="item-title">{{item.title}}</p>
            <p class="item-content">{{item.desc}}</p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Home2-weekend',
  props: {
    wlist: Array
  },
  data() {
    return {
      recommendList: [
        {
          id: '0001',
          imgUrl:
            'http://img1.qunarzz.com/sight/source/1505/74/98a840f2a881b.jpg_r_640x214_1bf94c8e.jpg',
          title: '陕西温泉季',
          content: '养生、养性、养心的理想之地，曲径通幽，鸟语花香，让您在远离喧嚣之地享受终南隐士生活。'
        },
        {
          id: '0002',
          imgUrl:
            'http://img1.qunarzz.com/sight/source/1505/74/98a840f2a881b.jpg_r_640x214_1bf94c8e.jpg',
          title: '陕西温泉季',
          content: '养生、养性、养心的理想之地，曲径通幽，鸟语花香，让您在远离喧嚣之地享受终南隐士生活。'
        },
        {
          id: '0003',
          imgUrl:
            'http://img1.qunarzz.com/sight/source/1505/74/98a840f2a881b.jpg_r_640x214_1bf94c8e.jpg',
          title: '陕西温泉季',
          content: '养生、养性、养心的理想之地，曲径通幽，鸟语花香，让您在远离喧嚣之地享受终南隐士生活。'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
.recommend-title {
  line-height: 0.8rem;
  background: #eee;
  text-indent: 0.2rem;
}

.item-img-wrapper {
  overflow: hidden;
  height: 0;
  padding-bottom: 53%;

  .item-img {
    width: 100%;
  }
}

.item-info {
  padding: 0.1rem;

  .item-title {
    line-height: 0.54rem;
    font-size: 0.32rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .item-content {
    line-height: 0.4rem;
    color: #aaa;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
}
</style>
