import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

function loadView (view) {
  return () => import(/* webpackChunkName: "view-[request]" */ `@/views/${view}.vue`)
}

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: loadView('Home')
    // },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: loadView('About')
    // },
    {
      path: '/result',
      name: 'result',

      component: loadView('Result')
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
