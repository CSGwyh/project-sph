<template>
  <div>
    <h1>params参数{{$route.params.keyword}}</h1>      <!--用$route来获取参数，这边的keyword是从Header的index.vue传过来的-->
    <h2>query参数{{$route.query.k}}</h2>
  </div>
</template>

<script>
export default {
    name:'',
    props:['keyword']
}
</script>

<style>

</style>