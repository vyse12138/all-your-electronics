<template>
  <div>
    <div class="title">
      <h1>{{ msg }}</h1>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const msg = ref('Cart')
</script>
