<template>
    <app-post-form :item="item" :rules="rules"></app-post-form>
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
        computed:{
            rules(){
                return this.$store.getters.getPostRules;
            }
        },
        methods: {
            submit() {
                this.item.rating = 3;
                this.$store.dispatch('createPost', this.item);
            }
        }
    }
</script>