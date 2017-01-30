import Home from './components/Home.vue';

import ListPost from './components/post/listPost.vue';
import CreatePost from './components/post/createPost.vue';
import EditPost from './components/post/editPost.vue';
import ViewPost from './components/post/viewPost.vue';

import ListCategory from './components/categories/listCategory.vue';
import CreateCategory from './components/categories/createCategory.vue';
import EditCategory from './components/categories/editCategory.vue';

export const routes = [
    { path: '/', component: Home },

    //Post
    { path: '/post', component: ListPost, name: 'listPost' },
    { path: '/post/new', component: CreatePost, name: 'createPost' },
    { path: '/post/edit/:id', component: EditPost, name: 'editPost' },
    { path: '/post/view/:id', component: ViewPost, name: 'viewPost' },

    //Category
    { path: '/category', component: ListCategory, name: 'listCategory' },
    { path: '/category/new', component: CreateCategory, name: 'createCategory' },
    { path: '/category/edit/:id', component: EditCategory, name: 'editCategory' }
]