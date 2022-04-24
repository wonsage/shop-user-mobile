import { createRouter, createWebHashHistory } from 'vue-router'

// 路由规则
const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login/index.vue')
  },
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/Home/index.vue')
  },
  {
    path: '/category',
    name: 'category',
    component: () => import('@/views/Category/index.vue')
  },
  {
    path: '/category-datail/:categoryId',
    name: 'category-detail',
    component: () => import('@/views/CategoryDetail/index.vue')
  },
  {
    path: '/order',
    name: 'order',
    component: () => import('@/views/Order/index.vue')
  },
  {
    path: '/order-confirm',
    name: 'order-confirm',
    component: () => import('@/views/OrderConfirm/index.vue'),
    props: true
  },
  {
    path: '/order-detail/:orderId',
    name: 'order-detail',
    component: () => import('@/views/OrderDetail/index.vue')
  },
  {
    path: '/pay',
    name: 'pay',
    component: () => import('@/views/Pay/index.vue')
  },
  {
    path: '/:pathMatch(.*)*', // 匹配所有路径，不能单独使用 *
    name: 'not-found',
    component: () => import('@/views/NotFound/index.vue')
  }
]

// 创建 Router 实例
const router = createRouter({
  history: createWebHashHistory(), // 使用 Hash 模式
  routes
})

export default router
