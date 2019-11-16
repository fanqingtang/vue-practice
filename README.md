# vue-practice
vue使用方法总结


# 实现单页开发的方式

- 通过 hash记录跳转的路径（可以产生历史管理）
- 浏览器自带的历史管理的方式history （history.pushState()）可能会导致 404 错误
- 开发的时候使用 hash的方式 上线的化我们会使用history的方式