<template>
  <nav>
    <el-menu default-active="/" mode="horizontal" router>
      <el-menu-item index="/"> Home </el-menu-item>
      <el-menu-item index="/admin"> Admin </el-menu-item>
      <el-menu-item index="/cart"> Cart </el-menu-item>
      <el-menu-item index="/login"> Login </el-menu-item>
      <el-menu-item index="/user" id="user">
        <i class="el-icon-user"></i>
      </el-menu-item>
    </el-menu>
  </nav>

  <router-view id="r" />
</template>

<script setup lang="ts"></script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
#r {
  width: 960px;
  margin: 0 auto;
}
#user {
  float: right;
}
</style>
