import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import Mock from "./mock"
// import axios from "axios";
Mock.network()
Vue.config.productionTip = false
Vue.prototype.$bus = new Vue({})
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
