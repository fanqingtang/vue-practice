# vue-practice
vue使用方法总结


# 实现单页开发的方式

- 通过 hash记录跳转的路径（可以产生历史管理）主要有个 hashchange 方法
- 浏览器自带的历史管理的方式history （history.pushState()）可能会导致 404 错误
- 开发的时候使用 hash的方式 上线的化我们会使用history的方式


# vue 实例上的方法

- this.$data  vm上的数据
- this.$watch 监控
- this.$el 当前el元素
- this.$set 后加的属性实现响应式变化
- this.$options vm 上的所有属性
- this.$nextTick(() => { // 异步方法，等待渲染dom完成后获取vm})
- this.$refs  // 获取dom元素