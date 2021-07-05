import Vue from "vue";
import Router from 'vue-router';
import PageClients from './pages/clients';
import PageHome from './pages/home';
import PageMobiles from './pages/mobiles';
import PageMobile from './pages/mobile';
import PageNotFound from './pages/not-found';
import PageUsers from './pages/users';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: PageHome,
        },
        {
            path: '/mobiles',
            name: 'mobiles',
            component: PageMobiles,
        },
        {
            path: '/mobiles/:id',
            name: 'mobile',
            component: PageMobile,
        },
        {
            path: '/utilisateurs',
            name: 'users',
            component: PageUsers,
        },
        {
            path: '/clients',
            name: 'clients',
            component: PageClients,
        },
        {
            path: '*',
            name: 'notfound',
            component: PageNotFound,
        },
    ]
})
