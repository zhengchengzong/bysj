<template>
  <dir>
    <!-- 左侧导航 -->
    <Menu></Menu>
    <!-- 右侧内容 -->
    <Content></Content>
  </dir>
</template>

<script>
import Content from './Content/index.vue'
import Menu from './Menu/index.vue'

export default {
  components:{Content,Menu}

}
</script>

<style>

</style>