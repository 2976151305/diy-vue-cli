import App from './App.vue'
import Vue from 'vue/dist/vue'
import store from './store/index'
import './assets/style/style.scss'
new Vue({
  el: '#app',
  store,
  components: { App },
  template: '<App/>'
})