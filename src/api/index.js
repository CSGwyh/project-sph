/*
 * @Author: Yanhuang Wu
 * @Date: 2022-10-14 10:11:41
 * @LastEditors: Yanhuang Wu
 * @LastEditTime: 2022-10-30 10:05:15
 * @FilePath: \project-SPH\app\src\api\index.js
 * @Description: 
 * 
 * Copyright (c) 2022 by CSG, All Rights Reserved. 
 */
//当前这个模块：API进行统一管理
import requests from './request';

//三级联动接口  
//
//发请求：axios发请求返回结果Promise对象
// export const reqCategoryList = ()=> {
//     return requests({url:'/product/getBaseCategoryList',method:'get'})
// }

//箭头函数简写，去掉花括号，去掉return
export const reqCategoryList = ()=> requests({url:'/product/getBaseCategoryList',method:'get'})

