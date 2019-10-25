import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import store from './store'

Vue.config.productionTip = false

Vue.prototype.$axios = axios

new Vue({
  router,
  render: function (h) { return h(App, {props: {store}}) }
}).$mount('#app')
