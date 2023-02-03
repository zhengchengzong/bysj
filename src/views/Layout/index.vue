<template>
  <div class="layout">
    <!-- 左侧导航 -->
    <div class="menu"><Menu></Menu></div>
  
    <!-- 右侧内容 -->
    <div class="content"><Content></Content></div>
    
  </div>
</template>

<script>
  import Content from './Content/index.vue'
  import Menu from './Menu/index.vue'

  export default {
    components:{Content,Menu}

  }
</script>

<style>
.menu{
     position: fixed;
     left: 0;
     top: 0;
     bottom:0;
     width:200px;
     background-color: #112f50;
}
.content{
  padding-left: 200px;
}
</style>