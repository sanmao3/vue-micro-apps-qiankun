import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import routes from './router'

Vue.config.productionTip = false

Vue.use(VueRouter)

import { registerMicroApps } from 'qiankun'

registerMicroApps([
  {
    name: 'micro-app1',
    entry: '//localhost:3001',
    container: '#microAppContainer',
    activeRule: '/home/app1',
  },
]);

const router = new VueRouter({
  base: '/',
  mode: 'history',
  routes
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
