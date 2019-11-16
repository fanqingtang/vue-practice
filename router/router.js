import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const router = new Router(
  {
    mode: 'history',
    routes: [
      {
        path: '/cart',
        name: 'Cart',
        component: () => import("../views/Cart.vue")
      },
      {
        path: '/todo',
        name:'Todo',
        component: () => import("../views/Todo.vue")
      }
    ]
  }
);

export default router;