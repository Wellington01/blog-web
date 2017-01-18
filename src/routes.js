import Home from './components/Home.vue';

import Post from './components/post/post.vue';
import ListPost from './components/post/listPost.vue';
import CreatePost from './components/post/createPost.vue';
import EditPost from './components/post/editPost.vue';
import ViewPost from './components/post/viewPost.vue';

import Category from './components/categories/category.vue';
import ListCategory from './components/categories/listCategory.vue';
import CreateCategory from './components/categories/createCategory.vue';
import EditCategory from './components/categories/editCategory.vue';

export const routes = [
    { path: '/', component: Home },
    {
        path: '/post',
        component: Post,
        children: [
            { path: '', component: ListPost },
            { path: 'new', component: CreatePost },
            { path: 'edit/:id', component: EditPost, name: 'editPost' },
            { path: 'view/:id', component: ViewPost, name: 'viewPost' }
        ]
    },
    {
        path: '/category',
        component: Category,
        children: [
            { path: '', component: ListCategory },
            { path: 'new', component: CreateCategory },
            { path: 'edit/:id', component: EditCategory, name: 'editCategory' }
        ]
    },
]