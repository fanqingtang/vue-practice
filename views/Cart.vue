<template>
  <div>
    我是购物车了
    <img src="../images/two.jpg" alt="">
  </div>
</template>


<script>
import axios from 'axios';
export default {
  name: 'Cart',
  created() {  // 在数据被初始化后会被调用，this指向指的是vm实例，钩子函数
    axios.get('../assets/json/carts.json').then(function (data) {
      console.log(data)
    })
  },
  data() {
    return {
      data: {
        products: []
      }
    }
  }
}
</script>


<style scoped>

</style>