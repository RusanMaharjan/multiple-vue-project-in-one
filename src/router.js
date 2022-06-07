import { createRouter, createWebHistory } from "vue-router";
import MarvelHeros from'./view/MarvelHeros.vue'
import AboutUs from'./view/AboutUs.vue'
import Home from'./view/Home'
import Markdown from'./view/Markdown'
import Slider from'./view/Slider'

const routes = [
    {
        path: '/',
        name: 'Home',
        component:Home
    },
    {
        path: '/marvel-heros',
        name: 'MarvelHeros',
        component:MarvelHeros
    },
    {
        path: '/about',
        name: 'AboutUs',
        component:AboutUs
    },
    {
        path: '/markdown',
        name: 'Markdown',
        component:Markdown
    },
    {
        path: '/slider',
        name: 'Slider',
        component:Slider
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;