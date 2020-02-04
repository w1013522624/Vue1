<template>
  <div id="app">
    <!-- keep-alive 路由内容加载一次后, 把内容放入内存中, 下次直接在内存中取数据, 不重新加载 -->
    <keep-alive exclude="Detail">
      <!-- <img src="./assets/logo.png"> -->
      <!-- 当前路由地址下 所对应的内容 -->
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style />
