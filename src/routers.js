import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);
const routes = [{
    path: '/#/',
    component: require('./App'),
    children: [{
        path: '/home',
        name: 'home',
        component: require('./pages/home')
    },{
        path: '/history',
        name: 'history',
        component: require('./pages/history.vue')
    }]
}];

const router = new VueRouter({
    routes: routes,
    history:true
});

export default router
