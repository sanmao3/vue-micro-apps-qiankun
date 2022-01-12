import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false


import { registerMicroApps, start } from 'qiankun';

registerMicroApps([
  {
    name: 'micro-app1',
    entry: '//localhost:3001',
    container: '#microAppContainer',
    activeRule: '/app1',
  },
]);

start();

new Vue({
  render: h => h(App),
}).$mount('#app')
