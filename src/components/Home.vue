<template>
    <app-card-post :posts="posts"></app-card-post>
</template>

<script>
    import CardPost from './post/cardPost.vue';

    export default {
        name:'Home',
        components: {
            appCardPost: CardPost
        },
        computed: {
            posts() {
                return this.$store.getters.allPosts;
            }
        },
        created() {
            this.$store.dispatch('loadPosts');
        }
    }
</script>