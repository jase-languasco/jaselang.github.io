import VueRouter from 'vue-router';

import Home from './components/Home.vue';
// import About from './components/About';
import Read from './components/Read';
import Watch from './components/Watch';

let routes = [
    {
        path: '/',
        component: Home
    },
    // {
    //     path: '/about',
    //     component: About
    // },
    {
        path: '/watch',
        component: Watch
    },
    {
        path: '/read',
        component: Read
    }
];

export default new VueRouter({
    routes
});