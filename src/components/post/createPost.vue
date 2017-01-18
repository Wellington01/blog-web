<template>
    <app-post-form :item="item" :rules="this.$store.getters.getPostRules"></app-post-form>
</template>

<script>

    import PostForm from './formPost.vue'

    export default {
        name:'PostCreate',
        components:{
            appPostForm : PostForm
        },
        data(){
            return {
                item:{
                    id: null,
                    name: null,
                    content: null,
                    category_id: null
                }
            }
        },
        methods: {
            submit() {
                this.$store.dispatch('createPost', this.item);
            }
        }
    }
</script>