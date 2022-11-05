/*
 * @Author: Yanhuang Wu
 * @Date: 2022-10-14 10:11:41
 * @LastEditors: Yanhuang Wu
 * @LastEditTime: 2022-10-30 11:42:50
 * @FilePath: \project-SPH\app\src\store\home\index.js
 * @Description: 
 * 
 * Copyright (c) 2022 by CSG, All Rights Reserved. 
 */
import {reqCategoryList} from '@/api'

const state = {
    //state中数据默认初始值别瞎写，根据接口的返回值初始化
    categoryList : []
};
const mutations = {
    //这边的categoryList为前面传过来的result.data,第一个参数就不是context了，而是state
    CATEGORYLIST(state,categoryList){
        state.categoryList = categoryList.slice(0,16)
    }
};
const actions = {
    //通过API里面的接口函数调用，向服务器发送请求，获取服务器的数据
    //这边的{commit}是解构赋值，他代替context，而且他还能省下下面的commit前面的context，不然要写context.commit('') （这个专业术语叫解构对象类型参数，我在csdn有收藏
    //复习一下，action里面的函数拿到的两个参数，第一个叫context，为mini版本的store，第二个是前面传过来的参数
      async categoryList({commit}){
        //注意，调用一个函数的时候一定要加括号，不管你要的是他的返回值还是函数体本身
        let result = await reqCategoryList()
        if(result.code == 200){
            commit('CATEGORYLIST',result.data)
        }
    }
};
const getters = {}


export default {
    state,
    mutations,
    actions,
    getters
}