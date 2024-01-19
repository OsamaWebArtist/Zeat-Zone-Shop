/*eslint-disable*/
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import "./sass/main.scss";
import "bootstrap";
import "normalize.css";
import 'bootstrap/dist/css/bootstrap.css';
import vuelidate from 'vuelidate';

createApp(App).use(store).use(router).mount('#app');
