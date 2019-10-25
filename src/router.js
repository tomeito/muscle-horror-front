import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'

Vue.use(Router)

function loadView (view) {
  return () => import(/* webpackChunkName: "view-[request]" */ `@/views/${view}.vue`)
}

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/result/:id',
      alias: '/results/:id',
      name: 'result',
      component: loadView('Result'),
      beforeEnter: (to, from, next) => {
        store.setUserId(to.params.id);
        next();
      }
    },
    {
      path: '/ranking',
      name: 'ranking',
      component: loadView('Ranking')
    },
    {
      path: '/graph',
      name: 'graph',
      component: loadView('Graph')
    }
  ]
})
