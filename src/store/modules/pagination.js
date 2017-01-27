import axios from 'axios';

const state = {
    pagination: {}
}

const mutations = {
    'LOAD_PAGINATION' (state, pagination) {

        state.pagination = pagination;
    },
    'CLEAR_PAGINATION' (state) {
        state.pagination = {};
    }
}

const actions = {

    changePage({ commit, state }, params) {

        let changePage = params.configPagination.methodRequest + '/?page=' + params.page;

        axios.get(changePage).then(response => {

            commit(params.configPagination.methodLoad, response.data.items);

            if (response.data.pagination) {
                commit('CLEAR_PAGINATION');
                commit('LOAD_PAGINATION', response.data.pagination);
            }

        }).catch(error => {

            console.log(error);
        });
    },
    clearPagition({ commit }) {
        commit('CLEAR_PAGINATION');
    }
}

const getters = {
    pagination(state) {
        return state.pagination;
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}