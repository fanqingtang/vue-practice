import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const router = new Router(
  {
    routes: [
      {
        path: '/cart',
        name: 'Cart',
        component: () => import("../views/Cart.vue")
      }
    ]
  }
);

export default router;