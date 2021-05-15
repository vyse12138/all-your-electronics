<template>
  <div>
    <div class="title">
      <h1>All Orders</h1>
      <el-table :data="orders" empty-text="There is no order">
        <el-table-column prop="id" label="Order ID"> </el-table-column>
        <el-table-column prop="date" label="Order Date"> </el-table-column>
        <el-table-column prop="username" label="Customer"> </el-table-column>

        <el-table-column prop="price" label="Price($)"> </el-table-column>
        <el-table-column prop="products" label="Products"> </el-table-column>

        <el-table-column prop="shipment" label="Shipment"> </el-table-column>

        <el-table-column label="Change Shipment State">
          <template #default="scope">
            <el-select
              v-model="orders[scope.$index].shipment"
              @change="handleChange(scope)"
            >
              <el-option label="pending" value="pending"></el-option>
              <el-option label="shipped" value="shipped"></el-option>
              <el-option label="arrived" value="arrived"></el-option>
            </el-select>
          </template>
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

const handleChange = (scope: any) => {
  axios.post('http://localhost:3000/api/orders/edit', {
    id: scope.row.id,
    shipment: scope.row.shipment
  })
  ElMessage({
    duration: 1200,
    type: 'success',
    message: 'Shipment state changed'
  })
}
</script>
