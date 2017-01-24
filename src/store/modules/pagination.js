const state = {
    pagination: {
        "total": 13,
        "per_page": 10,
        "current_page": 1,
        "last_page": 2,
        "from": 1,
        "to": 10
    }
}

const mutations = {
    'LOAD_PAGINATION' (state, pagination) {

        state.pagination = {};

        state.pagination = pagination;
    }
}

const actions = {

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