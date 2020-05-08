import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { signIn} from "./firebaseConfig";
Vue.config.productionTip = false
signIn();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
