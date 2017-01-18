import Vue from 'vue';
import Vuex from 'vuex';
import categories from './modules/categories.js';
import posts from './modules/posts.js';

Vue.use(Vuex);

export default new Vuex.Store({

    modules: {
        categories,
        posts
    }
});