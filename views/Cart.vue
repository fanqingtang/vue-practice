<template>
  <div> 
    <div class="container">
      <div class="row">
          <table class="table table-hover table-bordered">
            <!-- <caption class="h2 text-warning text-center">购物车</caption> -->
            <tr>
              <th>全选 <input type="checkbox" v-model="checkAll"></th>
              <td>商品</td>
              <td>单价</td>
              <td>数量</td>
              <td>小计</td>
              <td>操作</td>
            </tr>
            <tr v-for="(product, index) in products" :key="index">
              <td><input type="checkbox" v-model="product.isSelected"></td>
              <td><img :src="product.productCover" :alt="product.productName" :title="product.productName"></td>
              <td>{{product.productPrice}}</td>
              <td><input type="number" v-model.number="product.productCount" min="1"></td>
              <td>{{product.productPrice*product.productCount | toFixed(2)}}</td>
              <td><button class="btn- btn-danger" @click="remove(product)">删除</button></td>
            </tr>
            <tr>
              <td>总价格: {{sum | toFixed(2)}}</td>
            </tr>
          </table>
      </div>
    </div>
  </div>
</template>


<script>
import axios from 'axios';
export default {
  name: 'Cart',
  created() {  // 在数据被初始化后会被调用，this指向指的是vm实例，钩子函数
    axios.get('../assets/json/carts.json').then(res => {
      this.products = res.data;
      // this.checkOne();
    })
  },
  data() {
    return {
        products: []
    }
  },
  filters: {  // 可以定义好多过滤器
    toFixed (val, num) {
      return '$' + val.toFixed(num);
    }
  },
  computed: {
    checkAll : {
      get () {  //get和set this指向实例 默认 v-model 会获取 checkAll的值 所以会调用get 方法
        return this.products.every(item => item.isSelected);
      },
      set (val) {  // 当我们给 checkAll 赋值的时候
        this.products.forEach(item => item.isSelected = val );
      }
    },
    sum: {  // sum的结果会被缓存，如果依赖的数据没有变化就不会重新执行
      get () {
        return this.products.reduce((prev, next) => {
         if (!next.isSelected) return prev;
         return prev + next.productPrice*next.productCount;
       },0)
      }
    }
  },
  methods: {
    remove (list) {
      this.products = this.products.filter((item, i) => item !== list);
    },
    // change () {
    //   this.products.forEach(item => item.isSelected = this.checkAll);
    // },
    // checkOne () {
    //   this.checkAll = this.products.every(item => item.isSelected);
    // },
    // sum () {
    //   return this.products.reduce((prev, next) => {
    //     if (!next.isSelected) return prev;
    //     return prev + next.productPrice*next.productCount;
    //   },0)
    // }
  }
}
</script>


<style scoped>

</style>