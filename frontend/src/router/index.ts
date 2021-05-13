import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
  RouteRecordRaw
} from 'vue-router'
import Home from '../views/Home.vue'
import Cart from '../views/Cart.vue'
import Category from '../views/Category.vue'
import Admin from '../views/Admin/Admin.vue'
import New from '../views/Admin/New.vue'
import Edit from '../views/Admin/Edit.vue'
import Product from '../views/Admin/Product.vue'
import Login from '../views/Login.vue'
import SignUp from '../views/SignUp.vue'

import Detail from '../views/Detail.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
    // component: () => import('@/views/home.vue') // or lazy load
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/category/:name',
    name: 'Category',
    component: Category
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin,
    children: [
      {
        path: 'new',
        name: 'New',
        component: New
      },
      {
        path: 'product',
        name: 'Product',
        component: Product
      },
      {
        path: 'edit/:id',
        name: 'Edit',
        component: Edit
      }
    ]
  },
  {
    path: '/detail',
    name: 'Detail',
    component: Detail
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
