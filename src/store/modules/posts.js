import axios from 'axios'
import rules from '../../validations/postRules.js';

const state = {
    posts: [],
    post: {},
    rules: {},
    configPagination: {
        'methodLoad': 'LOAD_POSTS',
        'methodRequest': '/posts'
    }
}

const mutations = {
    'LOAD_POSTS' (state, posts) {

        state.posts = posts;
    },
    'LOAD_POST' (state, post) {

        state.post = post;
    }
}

const actions = {

    loadPosts({ commit }, paginate) {
        debugger;
        axios.get('/posts', { params: { isPaginate: paginate } }).then(response => {
            debugger;
            commit('LOAD_POSTS', response.data.items);

            if (response.data.pagination) {
                commit('LOAD_PAGINATION', response.data.pagination);
            }

        }).catch(error => {

            console.log(error);
        });
    },
    loadPost({ commit }, id) {

        axios.get(`/posts/${id}`)
            .then(response => {

                commit('LOAD_POST', response.data.post);
            })
            .catch(error => {
                console.log(error);
            });
    },
    createPost({ commit }, post) {

        axios.post('/posts', post)
            .then(response => {

                window.location.href = "/post";
            })
            .catch(error => {
                console.log(error);
            });
    },
    updatePost({ commit }, { id, post }) {

        axios.put(`/posts/${id}`, post)
            .then(response => {

                window.location.href = "/post";
            })
            .catch(error => {
                console.log(error);
            });
    },
    deletePost({ commit }, { id, callback }) {

        axios.delete(`/posts/${id}`).then(response => {

            if (response.data.success) {

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
    allPosts(state) {
        return state.posts;
    },
    getPost(state) {
        return state.post;
    },
    getPostRules(state) {
        return state.rules = rules;
    },
    getConfigPaginatePost(state) {
        return state.configPagination;
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}