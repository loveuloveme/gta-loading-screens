import { createApp } from 'vue';
import './style.scss';
import * as VueRouter from 'vue-router';
import Home from '@/pages/Home.vue';
import App from './App.vue';
import ContainerVue from './components/Container.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/4', component: ContainerVue },
];

const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory('/'),
    routes,
});

const app = createApp(App);

app.use(router);

app.mount('#app');
