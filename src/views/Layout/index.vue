<template>
  <div class="layout">
    <!-- 左侧导航 -->
    <div class="menu"><Menu :isCollapse="isCollapse"></Menu></div>
  
    <!-- 右侧内容 -->
    <div class="content" :class="{active:isCollapse}"><Content @changeMenu="changeMenu" :isCollapse="isCollapse"></Content></div>
    
  </div>
</template>

<script>
  import Content from './Content/index.vue'
  import Menu from './Menu/index.vue'

  export default {
    data() {
      return {
        isCollapse:false
      }
    },
    components:{Content,Menu},
    methods:{
      changeMenu(){
        this.isCollapse=!this.isCollapse
      }
    }

  }
</script>

<style>
.menu{
     position: fixed;
     left: 0;
     top: 0;
     bottom:0;
     /* width:200px; */
     background-color: #112f50;

}
.content{
  padding-left: 200px;
  transition: all .5s;
}
.active{
  padding-left: 62px;
}
</style>