<template>
  <div>
    <!-- 顶部区域 -->
    <div class="header tesu1">
      <div class="icon">
         <i v-if="!isCollapse" @click="changemenu" class="iconfont icon-indentdecrease"></i>
         <i v-if="isCollapse" @click="changemenu" class="iconfont icon-indentincrease"></i>
          
      </div>
      
      <div class="header-right">
        <span>{{nowTime}}</span>
        <span class="linestyle">|</span>
        <span>欢迎：XXX</span>
        <span class="linestyle">|</span>
        <i class="iconfont icon-tuichu exit"></i>
      </div>
    </div>
    <!-- 内容区域 -->
    <router-view></router-view>
  </div>
</template>

<script>
import dayjs from 'dayjs'
import { set } from 'vue'
export default {
  props:['isCollapse'],
  data(){
    return{
      nowTime:''
    }
  },
  methods:{
      changemenu(){
        this.$emit("changeMenu")
      }
},created(){
  setInterval(()=>{
    this.nowTime=dayjs(new Date()).format('YYYY-MM-DD HH:mm:ss')
  },1000)
    
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
  display: flex;
}
.icon i{
    font-size:30px; 
}
.header-right{
  flex: 1;
  text-align: right;
  padding-right: 20px;
  font-size: 18px;
}
.linestyle{
  font-size: 18px;
  padding: 10px;
  color: #f5f5f5;
}
.exit i{
  font-size: 18px;
}
.tesu1{
  position:relative;
  top: -8px;
  left: -6px;
}
</style>