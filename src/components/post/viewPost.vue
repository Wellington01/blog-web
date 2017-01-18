<template>
    <div class="title">
        <header class="top-content">
            <h1 class="title2">{{post.name}}</h1>
        </header>       
        <article class="single-the-content"> 
            <p>{{post.content}}</p>
        </article>
    </div>
</template>

<script>
    export default {
        methods: {
            postId() {
                return this.$route.params.id;
            },
        },
        computed: {
            post() {
                return this.$store.getters.getPost;
            }
        },
        created() {

            let postId = this.postId();

            if (postId) {
                this.$store.dispatch('loadPost', postId);
            }
        }
    }
</script>

<style>
    .title {
        font-size: 13px;
        display: block;
        margin-bottom: 8px;
        letter-spacing: 0.8px;
        text-transform: uppercase;
    }
    
    .title2 {
        color: #111111;
        font-size: 40px;
        line-height: 100%;
        font-family: Arial, Helvetica, sans-serif;
    }
    
    .top-content {
        color: #929292;
        text-align: center;
        background: #f9f9f9;
        line-height: 100%;
        padding: 10px 0 10px 0;
    }
    
    .single-the-content {
        color: #646464;
        font: 17px/2 helvetica, Arial, Verdana, sans-serif;
        letter-spacing: .20px;
        text-indent: 1.8em;
    }
</style>