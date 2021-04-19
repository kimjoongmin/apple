import { createWebHistory, createRouter } from 'vue-router';

const routes = [
    {path: '/', name: 'Home', component: () => import('@/views/Home')},
    {path: '/Blog', name: 'Blog', component: () => import('@/views/Blog')},
    {path: '/Rooms', name: 'Rooms', component: () => import('@/views/Rooms')},
    {path: '/Game', name: 'Game', component: () => import('@/views/Game')},
  ];

export const router = createRouter({
    history: createWebHistory(),
    routes,
});