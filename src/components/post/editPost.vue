<template>
    <app-post-form :item="item" :rules="rules"></app-post-form>
</template>

<script>

    import { mapGetters, mapActions } from 'vuex';
    import PostForm from './formPost.vue'

    export default {
        name:'PostEdit',
        components:{
            appPostForm : PostForm
        },
        computed:{
            ...mapGetters({
                    item : 'getPost',
                    rules: 'getRules'
            })
        },
        methods: {
            ...mapActions([
                'loadPost',
                'updatePost'
            ]),
            submit() {
                this.updatePost({'id': this.item.id,'post': this.item});
            }
        },
        created(){

            let postId = this.$route.params.id;

            if(postId){
                this.loadPost(postId);
            }
        }
    }
</script>