import Vue from 'vue'
import App from './App'
import router from './router'
import 'es6-promise'

import store from './store'

console.log(router)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
