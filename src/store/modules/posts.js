import axios from 'axios'
import rules from '../../validations/postRules.js';

const state = {
    posts: [],
    post: {},
    rules: {}
}

const mutations = {
    'LOAD_POSTS' (state, posts) {

        state.posts = posts;
    },
    'LOAD_POST' (state, post) {

        state.post = post;
        state.loading = false;
    },
    'DELETE_POST' (state, id) {

        let post = state.posts.find(e => e.id === id);

        if (post) {

            state.posts.splice(state.posts.indexOf(post), 1);
        }
    }
}

const actions = {

    loadPosts({ commit }) {

        axios.get('/posts').then(response => {

            commit('LOAD_POSTS', response.data);

        }).catch(error => {

            console.log(error);
        });
    },
    loadPost({ commit }, id) {

        axios.get(`/posts/${id}`)
            .then(response => {

                commit('LOAD_POST', response.data);
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

                commit('DELETE_POST', id);

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
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}