// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import './assets/reset.scss'
import 'normalize.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

Vue.use(ElementUI)
Vue.config.productionTip = false
/*全局组件
Vue.component('Jack',{
  template:'<p>I am {{name}}</p>',
  data(){
    return {
      name:'Jack Ma'
    }
  }
})*/
/* eslint-disable no-new */
/*
注册全局组件
import HelloWorld from './components/HelloWorld'
Vue.component('HelloWorld',HelloWorld)
*/
new Vue({
  el: '#app',
  template: '<App />',
  components: { App }
})
/*
等同于
components:{
  "App":App 
}
如果你的key与value的名字一样可以缩写成 {App}*/

