import { createWebHistory, createRouter } from 'vue-router';

const routes = [
    {path: '/', name: 'Home', component: () => import('@/views/Home')},
    {path: '/About', name: 'About', component: () => import('@/views/About')},
    {path: '/Rooms', name: 'Rooms', component: () => import('@/views/Rooms')},
    {path: '/Game', name: 'Game', component: () => import('@/views/Game')},
  ];

export const router = createRouter({
    history: createWebHistory(),
    routes,
});