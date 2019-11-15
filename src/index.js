import Vue from 'vue';
import router from '../router/router.js';
import App from '../views/App.vue';

// 引入 bootstrap
import 'jquery/dist/jquery.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';




new Vue({
  router,
  el: "#root",
  render: h => h(App)
});




