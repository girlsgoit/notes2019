import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import Note from './components/Note.vue';
import Home from './components/Home.vue';
import Login from './components/Login.vue';
import Settings from './components/Settings.vue';
import Register from './components/Register.vue';
import Help from './components/Help.vue';
import DashboardList from './components/DashboardList.vue';
import Axios from 'axios'

Axios.defaults.baseURL = 'https://notes-api.girlsgoit.org/';

Axios.interceptors.request.use(function (config) {
  const token = localStorage.getItem('NOTES_AUTH');

  if (token) {
    config.headers['Authorization'] = 'Token ' + token;
  }
  return config;
}, function(error) {
  console.log(error);
});

Vue.use(VueRouter);

const rute = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: "/notes", component: DashboardList },
  { path: "/notes/:id", component: Note },
  { path: "/users/:id", component: Settings },
  { path: "/help", component: Help },
];

const router = new VueRouter({
  routes: rute,
  mode: 'history'
});

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router
}).$mount('#app');
