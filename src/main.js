import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.component('navSec', require('./components/navSec.vue').default)
Vue.component('description', require('./components/content/description.vue').default)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
