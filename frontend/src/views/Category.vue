<template>
  <div>
    <div class="title">
      <h1>{{ $route.params.name }}</h1>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
const route = useRoute()
console.log(route.params.name)
</script>
