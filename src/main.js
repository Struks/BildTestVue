import Vue from "vue";
import App from "./App.vue";
import VueRouter from'vue-router';
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import {routes} from './routes'; 

Vue.use(BootstrapVue);
Vue.use(VueRouter);

const router = new VueRouter ({
  routes,
  mode: 'history'
});

new Vue({
  router,
  render: h => h(App),
  
}).$mount("#app");
