<template>
  <nav>
    <div class="container">
      <ul class="nav__left">
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/admin">Admin</router-link>
        </li>
        <li>
          <router-link to="/cart">Cart</router-link>
        </li>
      </ul>
    </div>
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
  color: #2c3e50;
  margin-top: 60px;
}
</style>
