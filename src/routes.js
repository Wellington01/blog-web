import Home from './components/Home.vue';

import Post from './components/post/post.vue';
import ListPost from './components/post/listPost.vue';
import NewPost from './components/post/newPost.vue';
import ViewPost from './components/post/viewPost.vue';

import Category from './components/categories/category.vue';
import ListCategory from './components/categories/listCategory.vue';
import NewCategory from './components/categories/newCategory.vue';

export const routes = [
    { path: '/', component: Home },
    {
        path: '/post',
        component: Post,
        children: [
            { path: '', component: ListPost },
            { path: 'new', component: NewPost },
            { path: 'edit/:id', component: NewPost, name: 'editPost' },
            { path: 'view/:id', component: ViewPost, name: 'viewPost' }
        ]
    },
    {
        path: '/category',
        component: Category,
        children: [
            { path: '', component: ListCategory },
            { path: 'new', component: NewCategory },
            { path: 'edit/:id', component: NewCategory, name: 'editCategory' }
        ]
    },
]