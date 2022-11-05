/*
 * @Author: Yanhuang Wu
 * @Date: 2022-10-14 10:11:41
 * @LastEditors: Yanhuang Wu
 * @LastEditTime: 2022-10-28 20:21:19
 * @FilePath: \project-SPH\app\src\router\index.js
 * @Description: 
 * 
 * Copyright (c) 2022 by CSG, All Rights Reserved. 
 */
//配置路由的地方
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);
//引入路由组件
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Search from '@/pages/Search'
//配置路由
export default new VueRouter({
    routes:[
        {
            path:'/home',
            component:Home,
            meta:{show:true}
        },
        {
            path:'/login',
            component:Login,
            meta:{show:false}
        },
        {
            path:"/search/:keyword?",   //这边keyword是用来占位的，保证收到参数
            component:Search,
            meta:{show:true},
            name:"search",           //路由传参的时候用对象写法就需要这个name
            //路由组件能不能传递props数据？
            //布尔值写法:params
            props:true,
            //对象写法:额外的给路由组件传递一些props
            props:{a:1,b:2}
        },
        {
            path:'/register',
            component:Register,
            meta:{show:false}
        },
        {
            path:'/',
            redirect:"/home"
        }
    ]
})