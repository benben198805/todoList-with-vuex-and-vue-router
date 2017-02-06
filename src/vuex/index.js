import Vue from 'vue'
import Vuex from 'vuex'
import home from './modules/home'
import history from './modules/history'
import * as types from './type'

Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        records: []
    },
    mutations: {
        [types.SET_HISTORY](state, params) {
            state.records.push({
                text: params.text,
                action: params.action,
                time: +(new Date())
            })
        }
    },
    modules: {
        home,
        history
    },
    strict: process.env.NODE_ENV !== 'production'
})

export default store;
