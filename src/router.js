import { createRouter, createWebHistory } from "vue-router";
import MarvelHeros from'./view/MarvelHeros.vue'
import AboutUs from'./view/AboutUs.vue'
import Home from'./view/Home'
import Markdown from'./view/Markdown'
import Slider from'./view/Slider'
import Calculator from'./view/Calculator'

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
    {
        path: '/calculator',
        name: 'Calculator',
        component:Calculator
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;