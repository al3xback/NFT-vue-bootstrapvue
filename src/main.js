import './assets/scss/main.scss';

import Vue from 'vue';
import { LayoutPlugin, CardPlugin, BAvatar, BLink } from 'bootstrap-vue';

import App from './App.vue';

Vue.component('b-avatar', BAvatar);
Vue.component('b-link', BLink);
Vue.use(LayoutPlugin);
Vue.use(CardPlugin);

const app = new Vue({
	render: (h) => h(App),
});

app.$mount('#app');
