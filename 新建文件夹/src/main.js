import Vue from 'vue';
import App from './App.vue';
import initVue from './init';

Vue.config.productionTip = false;

const init = initVue();

new Vue({
  ...init,
  render: h => h(App),
}).$mount('#app');
