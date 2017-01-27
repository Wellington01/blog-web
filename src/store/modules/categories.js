import axios from 'axios';
import rules from '../../validations/categoryRules.js';

const state = {
    categories: [],
    category: {},
    rules: {},
    configPagination: {
        'methodLoad': 'LOAD_CATEGORIES',
        'methodRequest': '/categories'
    }
}

const mutations = {
    'LOAD_CATEGORIES' (state, categories) {
        state.categories = categories;
    },
    'LOAD_CATEGORY' (state, category) {
        state.category = category;
    }
}

const actions = {

    loadCategories({ commit }, paginate) {

        axios.get('/categories', { params: { isPaginate: paginate } }).then(response => {

            commit('LOAD_CATEGORIES', response.data.items);

            if (response.data.pagination) {
                commit('LOAD_PAGINATION', response.data.pagination);
            }

        }).catch(error => {

            console.log(error);
        });
    },
    loadCategory({ commit }, id) {

        if (!id) {
            return {
                id: null,
                name: null,
            }
        };

        axios.get(`/categories/${id}`)
            .then(response => {

                commit('LOAD_CATEGORY', response.data.category);
            })
            .catch(error => {
                console.log(error);
            });
    },
    createCategory({ commit }, category) {

        axios.post('/categories', category)
            .then(response => {

                window.location.href = "/category";
            })
            .catch(error => {
                console.log(error);
            });
    },
    updateCategory({ commit }, category) {

        axios.put(`/categories/${category.id}`, category.category)
            .then(response => {

                window.location.href = "/category";
            })
            .catch(error => {
                console.log(error);
            });
    },
    deleteCategory({ commit }, category) {

        axios.delete(`/categories/${category.id}`).then(response => {

            if (response.data.success) {

                category.callback('success', response.data.success);

            } else {

                category.callback('error', response.data.error);
            }

        }).catch(error => {
            console.log(error);
        });
    }
}

const getters = {
    allCategories(state) {
        return state.categories;
    },
    getCategory(state) {
        return state.category;
    },
    getCategoryRules(state) {
        return state.rules = rules;
    },
    getConfigPaginateCategory(state) {
        return state.configPagination;
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}