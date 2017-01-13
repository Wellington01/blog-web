<template>
    <div>
        <app-card-post></app-card-post>
    </div>
</template>

<script>
    import CardPost from './post/cardPost.vue';

    export default {
        components: {
            appCardPost: CardPost
        }
    }
</script>