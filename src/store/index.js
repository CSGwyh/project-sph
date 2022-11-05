/*
 * @Author: Yanhuang Wu
 * @Date: 2022-10-14 10:11:41
 * @LastEditors: Yanhuang Wu
 * @LastEditTime: 2022-10-29 11:05:57
 * @FilePath: \project-SPH\app\src\store\index.js
 * @Description: 
 * 
 * Copyright (c) 2022 by CSG, All Rights Reserved. 
 */
import Vue from 'vue';
import Vuex from 'vuex';
//需要使用插件一次
Vue.use(Vuex);
//模块化管理
import home from './home'
import search from './search'
//对外暴露Store类的一个实例
export default new Vuex.Store({
        modules:{
            home,
            search
        }
})