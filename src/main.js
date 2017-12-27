// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Seller from './components/seller/seller'
import Goods from './components/goods/goods'
import Ratings from './components/ratings/ratings'
import "./assets/stylus/index.scss"

Vue.config.productionTip = false
Vue.use(VueRouter);
Vue.use(VueResource);
let router = new VueRouter({
  mode:'history',
  routes:[
    {
      path:'/',
      component: Goods,
      redirect: './goods'
    },
    {
      path:'/goods',
      component: Goods
    },
    {
      path:'/seller',
      component: Seller
    },
    {
      path:'/ratings',
      component:Ratings
    },

  ]
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
