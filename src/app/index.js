import Vue from 'vue';
import App from './components/App.vue';
import router from './router/index'


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')