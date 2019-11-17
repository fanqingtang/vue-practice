<template>
  <div id="app">
    <router-link to="/">首页</router-link>
    <router-link to="/cart">购物车</router-link>
    <router-link to="/todo">todo-list</router-link>
    <router-link to="/com">组件</router-link>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    name: "App"
  }
</script>


<style scoped>

</style>