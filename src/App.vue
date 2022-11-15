<!--
 * @Author: Yanhuang Wu
 * @Date: 2022-10-14 10:11:41
 * @LastEditors: Yanhuang Wu
 * @LastEditTime: 2022-11-15 15:02:48
 * @FilePath: \project-SPH\app\src\App.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by CSG, All Rights Reserved. 
-->
<template>
  <div id="app">
    <Header/>
    <router-view></router-view>
    <Footer v-show="$route.meta.show"></Footer>   <!--这里在route里写了个meta，用$route显示-->
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  mounted(){
    //放在app里mounted的指令，只会发起一次
    //这边的$store虽然报的是any，但其实是起作用的
    this.$store.dispatch("categoryList");
  }
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
