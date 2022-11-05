/*
 * @Author: Yanhuang Wu
 * @Date: 2022-10-14 10:11:41
 * @LastEditors: Yanhuang Wu
 * @LastEditTime: 2022-10-29 11:14:17
 * @FilePath: \project-SPH\app\src\main.js
 * @Description: 
 * 
 * Copyright (c) 2022 by CSG, All Rights Reserved. 
 */
import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false
//三级联动组件---全局组件
import TypeNav from '@/components/TypeNav'
//第一个参数:全局组件的名字 第二个参数:哪一个组件
Vue.component(TypeNav.name,TypeNav)
//引入路由
import router from '@/router'
//引入仓库
import store from '@/store'


new Vue({
  render: h => h(App),
  //注册路由:下面的是kv一致省略v【router小写的】
  router,
  //注册仓库
  store
}).$mount('#app')
