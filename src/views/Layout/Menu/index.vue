<template>
<!-- el-menu:
default-active 默认打开的选中导航
text-color     文字颜色
active-text-color 高亮文字颜色
background-color 背景颜色 
collapse 是否水平折叠收起菜单-->
 <el-menu router default-active="/" class="el-menu-vertical-demo" 
 background-color="#112f50"
  text-color="#fff"
  active-text-color="#ffd04b" :collapse="isCollapse">
  <!-- <el-submenu index="1">
    <template slot="title">
      <i class="el-icon-location"></i>
      <span slot="title">数据展示</span>
    </template>
    <el-menu-item-group>
      <el-menu-item index="1-1">实验室数据展示</el-menu-item>
      <el-menu-item index="1-2">实验室设备展示</el-menu-item>
      <el-menu-item index="1-3">管理员展示</el-menu-item>
      <el-menu-item index="1-4">实验室资金展示</el-menu-item>
    </el-menu-item-group>
  </el-submenu> -->
   <el-menu-item index="/">
        <i class="el-icon-menu"></i>
        <span slot="title">数据展示</span>
      </el-menu-item>
  <el-submenu index="/labsmanage">
     <template slot="title">
      <i class="el-icon-menu"></i>
      <span slot="title">实验室信息管理</span>
    </template>
    <el-menu-item-group>
      <el-menu-item index="/labsmanage/labsadd">添加实验室</el-menu-item>
      <el-menu-item index="/labsmanage/labsquery">修改实验室</el-menu-item>
      <el-menu-item index="/labsmanage/labsmodify">查询实验室</el-menu-item>
    </el-menu-item-group>
  </el-submenu>
  <el-submenu index="/equipmentmanagement">
    <template slot="title">
      <i class="el-icon-location"></i>
      <span slot="title">实验室设备管理</span>
    </template>
    <el-menu-item-group>
      <el-menu-item index="/equipmentmanagement/addequipment">设备入库</el-menu-item>
      <el-menu-item index="/equipmentmanagement/deleteequipment">设备出库</el-menu-item>
      <el-menu-item index="/equipmentmanagement/modifyequipment">设备信息修改</el-menu-item>
      <el-menu-item index="/equipmentmanagement/maintenanceequipment">设备维护记录</el-menu-item>
      <el-menu-item index="/equipmentmanagement/repairequipment">设备报修记录</el-menu-item>
      <el-menu-item index="/equipmentmanagement/queryequipment">设备查询</el-menu-item>
    </el-menu-item-group>
  </el-submenu>
  <el-submenu index="/users">
    <template slot="title">
      <i class="el-icon-document"></i>
      <span slot="title">用户管理</span>
    </template>
    <el-menu-item-group>
      <el-menu-item index="/users/myselfmanagement">本用户管理</el-menu-item>
      <el-submenu index="/users/othersmanagement">
          <template slot="title">其它用户管理</template>
          <el-menu-item index="/users/othersmanagement/addusers">添加管理员</el-menu-item>
          <el-menu-item index="/users/othersmanagement/deleteusers">删除管理员</el-menu-item>
          <el-menu-item index="/users/othersmanagement/modifyusers">修改管理员信息</el-menu-item>
          <el-menu-item index="/users/othersmanagement/queryusers">查询管理员</el-menu-item>
        </el-submenu>
    </el-menu-item-group>
  </el-submenu>
</el-menu>
</template>

<script>
export default {
    props:['isCollapse']
}
</script>

<style>
 .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
  .el-menu{
    border-right:none;
  }
</style>