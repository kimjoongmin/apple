import { createWebHistory, createRouter } from 'vue-router';

const routes = [
    {path: '/apple', name: 'Home', component: () => import('@/views/Home')},
    {path: '/apple/Blog', name: 'Blog', component: () => import('@/views/Blog')},
    {path: '/apple/Rooms', name: 'Rooms', component: () => import('@/views/Rooms')},
    {path: '/apple/Game', name: 'Game', component: () => import('@/views/Game')},
  ];

export const router = createRouter({
    history: createWebHistory(),
    routes,
}); 