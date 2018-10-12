// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/font-awesome/css/font-awesome.css';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import bus from './bus'

Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
