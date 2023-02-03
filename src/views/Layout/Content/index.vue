<template>
  <div>
    <!-- 顶部区域 -->
    <div class="header"></div>
    <!-- 内容区域 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.header{
  background-color: yellow;
  height: 50px;
  width: 100%;
}
</style>