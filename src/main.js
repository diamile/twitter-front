import Axios from 'axios'
import Vue from 'vue'
import App from './App.vue'
import store from "./modules"
import router from "./routes";
import VueCookies from 'vue-cookies'

import FlashMessage from '@smartweb/vue-flash-message';
Vue.use(FlashMessage);

Vue.config.productionTip = false
Vue.use(VueCookies)

Axios.defaults.baseURL = "http://localhost:3000";
Vue.prototype.$https = "https://localhost:3001"

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
