<template>
  <div>
    <div class="recommend-title">猜你喜欢</div>
    <ul>
      <router-link
        tag="li"
        class="item border-bottom"
        v-for="(item) of rlist"
        :key="item.id"
        :to="'/detail/' + item.id"
      >
        <img class="item-img" :src="item.imgUrl" />
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-content">{{item.content}}</p>
          <button class="item-btn">查看详情</button>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Home2-recommend',
  props: {
    rlist: Array
  },
  data() {
    return {
      // recommendList: [
      //   {
      //     id: '0001',
      //     imgUrl:
      //       'http://img1.qunarzz.com/sight/p0/1508/c5/a017645d82ab89f271fdfb1bd6ecc2e0.water.jpg_200x200_2de772de.jpg',
      //     title: '西安城墙',
      //     content: '西安城墙悠久的文化历史背景,欢迎大家来参观'
      //   },
      //   {
      //     id: '0002',
      //     imgUrl:
      //       'http://img1.qunarzz.com/sight/p0/1508/c5/a017645d82ab89f271fdfb1bd6ecc2e0.water.jpg_200x200_2de772de.jpg',
      //     title: '西安城墙',
      //     content: '西安城墙悠久的文化历史背景,欢迎大家来参观'
      //   },
      //   {
      //     id: '0003',
      //     imgUrl:
      //       'http://img1.qunarzz.com/sight/p0/1508/c5/a017645d82ab89f271fdfb1bd6ecc2e0.water.jpg_200x200_2de772de.jpg',
      //     title: '西安城墙',
      //     content: '西安城墙悠久的文化历史背景,欢迎大家来参观'
      //   }
      // ]
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

.item {
  overflow: hidden;
  display: flex;
  height: 1.9rem;

  // background: lightblue;
  .item-img {
    width: 1.7rem;
    height: 1.7rem;
    padding: 0.1rem;
  }

  .item-info {
    flex: 1;
    padding: 0.1rem;
    min-width: 0;

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

    .item-btn {
      margin-top: 0.2rem;
      line-height: 0.44rem;
      background: linear-gradient(130deg, #ffab1e 37%, #ff8c12 100%);
      padding: 0 0.1rem;
      border-radius: 0.06rem;
      color: #fff;
    }
  }
}
</style>
