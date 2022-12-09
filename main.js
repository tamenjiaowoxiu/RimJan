// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import VueRouter from 'vue-router'
import router from './router' //自动扫描里面的路由配置

import  ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import VueAxios from 'vue-axios';
import axios from "axios";
Vue.prototype.$http = axios;
//配置请求的根路径
//测试环境的url
// axios.defaults.baseURL ="http://192.168.43.127:8000"
//本地mock
axios.defaults.baseURL ="http://127.0.0.1:4523/m1/1905009-0-default"
// axios请求拦截，为请求头对象，添加Token验证的Autorization字段
axios.interceptors.request.use(config => {
  console.log(config)
  config.headers.Autorization = sessionStorage.getItem('token')
 //每次都要返回
  return config
})
Vue.config.productionTip = false;


// 显示声明使用VueRouter
Vue.use(router);
Vue.use(ElementUI);
Vue.use(VueAxios,axios);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  //配置路由
  router,
  components: { App },
  template: '<App/>',
  render: h => h(App) //ElementUI官方
})
