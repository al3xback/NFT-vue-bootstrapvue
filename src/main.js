import './assets/scss/main.scss';

import Vue from 'vue';
import { BootstrapVue } from 'bootstrap-vue';
import App from './App.vue';

Vue.use(BootstrapVue);

const app = new Vue({
  render: h => h(App),
});

app.$mount('#app');
