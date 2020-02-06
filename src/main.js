import Vue from 'vue'
import App from './App'
import store from './store/store'
Vue.config.productionTip = false
App.mpType='app' //声明当前组件类型
Vue.prototype.$store=store
const app=new Vue(App) //生成应用实例
app.$mount() //挂载整个应用