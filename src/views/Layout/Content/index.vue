<template>
  <div>
    <!-- 顶部区域 -->
    <div class="header">
      <div class="icon">
         <i v-if="!isCollapse" @click="changemenu" class="iconfont icon-indentdecrease"></i>
         <i v-if="isCollapse" @click="changemenu" class="iconfont icon-indentincrease"></i>
      </div>
    </div>
    <!-- 内容区域 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  props:['isCollapse'],
methods:{
  changemenu(){
    this.$emit("changeMenu")
  }
}
}
</script>

<style scoped>
.header{
  background-color:#1e78bf;
  height: 50px;
  line-height: 50px;
  color: #fff;
  width: 100%;
}
.icon i{
    font-size:30px; 
}
</style>