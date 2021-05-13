<template>
  <nav>
    <el-menu default-active="1" mode="horizontal" router>
      <el-menu-item index="/"> Home </el-menu-item>
      <el-menu-item index="/admin"> Admin </el-menu-item>
      <el-menu-item index="/cart"> Cart </el-menu-item>
      <el-menu-item index="/login"> Login </el-menu-item>
    </el-menu>
  </nav>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
export default defineComponent({
  name: 'App',
  components: {
    HelloWorld
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
