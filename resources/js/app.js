require('./bootstrap');

import { createApp } from 'vue';
import router from './routes';
import store from './store';

import App from './App.vue';

import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'

const app = createApp({});
app.use(router);
app.use(store);

app.component('app', App);

app.mount('#app');