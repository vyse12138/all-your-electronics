<template>
  <div>
    <div class="title">
      <h1>All Orders</h1>
      <el-table :data="orders" empty-text="There is no order">
        <el-table-column sortable prop="Id" label="Order ID"> </el-table-column>
        <el-table-column sortable prop="Price" label="Price($)">
        </el-table-column>
        <el-table-column sortable prop="Products" label="Products">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
import { reactive } from 'vue'
import type PurchaseRecord from '../../interfaces/PurchaseRecord'
import axios from 'axios'

const orders = reactive(Array<PurchaseRecord>())

axios.get('http://localhost:3000/api/orders').then((res) => {
  for (const o of res.data) {
    orders.push(o)
  }
})
</script>
