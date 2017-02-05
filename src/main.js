import Vue from 'vue';
import App from './App';
import Vuex from 'vuex';
import router from './routers';
import store from './vuex/index';

Vue.use(Vuex);
new Vue({
    el: '#app',
    store: store,
    router: router,
    template: '<App/>',
    components: {App}
})