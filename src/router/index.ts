import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Echarts from '../views/Echarts.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Echarts',
    component: Echarts,
  },
  {
    path: '/fours',
    name: 'fours',
    component: () => import('@/views/fours.vue'),
  },
  {
    path: '/echarts',
    name: 'echarts',
    component: () => import('@/views/Echarts.vue'),
  },
  {
    path: '/todoList',
    name: 'todoList',
    component: () => import('@/views/todoList.vue'),
  },
  {
    path: '/validation',
    name: 'validation',
    component: () => import('@/views/validation.vue'),
  },
  {
    path: '/conditionalfilter',
    name: 'conditionalfilter',
    component: () => import('@/views/conditionalfilter.vue'),
  },
  {
    path: '/lazyLoader',
    name: 'lazyLoader',
    component: () => import('@/views/lazyLoader.vue'),
  },
  {
    path: '/usehook',
    name: 'usehook',
    component: () => import('@/views/useHook.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
