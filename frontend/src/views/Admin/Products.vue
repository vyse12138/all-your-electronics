<template>
  <div>
    <div class="title">
      <h1>All Products</h1>
      <el-table :data="products" empty-text="There is no order">
        <el-table-column prop="id" label="Product ID"> </el-table-column>
        <el-table-column prop="name" label="Product"> </el-table-column>
        <el-table-column prop="category" label="Product Category">
        </el-table-column>

        <el-table-column prop="price" label="Price($)"> </el-table-column>
        <el-table-column label="Operation">
          <template #default="scope">
            <el-button
              plain
              size="small"
              type="danger"
              @click="handleDelete(scope)"
              >Delete
            </el-button>
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

const products = reactive(Array<PurchaseRecord>())
axios.get('http://localhost:3000/api/product').then((res) => {
  for (const p of res.data) {
    products.push(p)
  }
})

const handleDelete = (scope: any) => {
  axios
    .post('http://localhost:3000/api/product/delete', {
      id: scope.row.id
    })
    .then(() => {
      axios.get('http://localhost:3000/api/product').then((res) => {
        products.length = 0
        for (const o of res.data) {
          products.push(o)
        }
      })
      ElMessage({
        duration: 1200,
        type: 'success',
        message: 'Delete success'
      })
    })
}
</script>
