import axios from 'axios';
import rules from '../../validations/categoryRules.js';

const state = {
    categories: [],
    category: {},
    rules: {}
}

const mutations = {
    'LOAD_CATEGORIES' (state, categories) {

        state.categories = categories;
    },
    'LOAD_CATEGORY' (state, category) {

        state.category = category;
    },
    'DELETE_CATEGORIES' (state, id) {

        let category = state.categories.find(e => e.id === id);

        if (category) {

            state.categories.splice(state.categories.indexOf(category), 1);
        }
    }
}

const actions = {

    loadCategories({ commit }) {

        axios.get('/categories').then(response => {

            commit('LOAD_CATEGORIES', response.data);

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

                commit('LOAD_CATEGORY', response.data);
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
    updateCategory({ commit }, { id, category }) {

        axios.put(`/categories/${id}`, category)
            .then(response => {

                window.location.href = "/category";
            })
            .catch(error => {
                console.log(error);
            });
    },
    deleteCategory({ commit }, { id, callback }) {

        axios.delete(`/categories/${id}`).then(response => {

            if (response.data.success) {

                commit('DELETE_CATEGORIES', id);

                callback('success', response.data.success);

            } else {

                callback('error', response.data.error);
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
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}