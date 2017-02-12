import * as types from '../type'
var _ = require('lodash');

const state = {
    selectOptions: [{
        label: 'complete',
        value: 'complete'
    }, {
        label: 'undo',
        value: 'undo'
    }, {
        label: 'add',
        value: 'add'
    }, {
        label: 'remove',
        value: 'remove'
    }],
    selectType: []
}

const getters = {
    getHistory: function(state, params, rootState) {
        if (_.filter(state.selectType, item=>item!="").length > 0) {
            return _.filter(rootState.records, item => _.includes(state.selectType, item.action));
        }
        return rootState.records
    },
    getSelectOptions: state => state.selectOptions
}

const mutations = {
    [types.SET_SELECT_OPTION](state, selectOptions) {
        state.selectType = selectOptions.split(',');
    }
}

const actions = {
    set_select_type: function({ commit }, selectOptions) {
        commit(types.SET_SELECT_OPTION, selectOptions);
    }
}


export default {
    state,
    actions,
    getters,
    mutations
}
