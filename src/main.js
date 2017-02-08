import Vue from 'vue';
import App from './App';
import Vuex from 'vuex';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css'
import router from './routers';
import store from './vuex/index';

Vue.use(Vuex);
Vue.use(ElementUI);

new Vue({
    el: '#app',
    store: store,
    router: router,
    template: '<App/>',
    components: {App}
})