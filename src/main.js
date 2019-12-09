// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/* eslint-disable */
import Vue from 'vue'
import App from './App'
import router from './router'
import { i18n } from './i18n/config'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'babel-polyfill' // 兼容ie10 11
Vue.config.productionTip = false

Vue.use(VueAwesomeSwiper)
if (process.BROWSER_BUILD) {
  const VueAwesomeSwiper = require('vue-awesome-swiper/ssr')
  Vue.use(VueAwesomeSwiper)
}
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  components: { App },
  template: '<App/>'
})
router.afterEach((to, from, next) => {
  window.scrollTo(0, 0)
})
