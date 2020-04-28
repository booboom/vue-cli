import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'

import * as filters from './utils/fiters'
import './plugins/element.js'

// Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  render: h => h(App),
}).$mount('#app')

Object.keys(filters).forEach(function (k) {
  Vue.filter(k, filters[k])
})
