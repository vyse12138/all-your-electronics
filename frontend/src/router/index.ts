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
import Report from '../views/Admin/Report.vue'
import User from '../views/User.vue'
import Chat from '../views/Chat.vue'
import Track from '../views/Track.vue'

import New from '../views/Admin/New.vue'
import AdminChat from '../views/Admin/AdminChat.vue'

import Products from '../views/Admin/Products.vue'
import Feedback from '../views/Admin/Feedback.vue'
import Orders from '../views/Admin/Orders.vue'
import Login from '../views/Login.vue'
import SignUp from '../views/SignUp.vue'

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
    path: '/track',
    name: 'Track',
    component: Track
  },
  {
    path: '/user',
    name: 'User',
    component: User
  },
  {
    path: '/chat',
    name: 'Chat',
    component: Chat
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
        path: 'chat',
        name: 'AdminChat',
        component: AdminChat
      },
      {
        path: 'orders',
        name: 'Orders',
        component: Orders
      },
      {
        path: 'products',
        name: 'Products',
        component: Products
      },
      {
        path: 'report',
        name: 'Report',
        component: Report
      },
      {
        path: 'feedback',
        name: 'Feedback',
        component: Feedback
      }
    ]
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
