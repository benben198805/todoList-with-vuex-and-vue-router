import * as types from '../type'

const state = {
    items: [{
        text: 'do homework',
        isDone: false
    }, {
        text: 'learn drive',
        isDone: false
    }],
    title: 'todo List with vuex and vue-router'
}

const actions = {
    add_item: function({ commit }, text) {
        commit(types.ADD_ITEM, text)
    },
    remove_item: function({ commit }, index) {
        commit(types.REMOVE_ITEM, index)
    },
    complete_item: function({ commit }, index) {
        commit(types.COMPLETE_ITEM, index)
    }
}
const getters = {
    getItems: state => state.items,
    getTitle: state => state.title,
    getDoneItemsCount: state => state.items.filter(item => item.isDone).length,
    getDoingItemsCount: state => state.items.filter(item => !item.isDone).length
}

const mutations = {
    [types.ADD_ITEM](state, text) {
        state.items.push({
            text: text,
            isDone: false
        })
    },
    [types.REMOVE_ITEM](state, index) {
        state.items.splice(index, 1);
    },
    [types.COMPLETE_ITEM](state, index) {
        state.items[index].isDone = !state.items[index].isDone;
    }
}

export default {
    state,
    actions,
    getters,
    mutations
}
