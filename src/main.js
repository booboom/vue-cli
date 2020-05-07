import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'

import './plugins/plugins.js'

new Vue({
  el: '#app',
  router,
  render: h => h(App),
}).$mount('#app')
