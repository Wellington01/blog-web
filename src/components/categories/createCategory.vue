<template>
    <app-category-form :item="item" :rules="rules"></app-category-form>
</template>

<script>

    import CategoryForm from './formCategory.vue'

    export default {
        name:'CategoryCreate',
        components:{
            appCategoryForm : CategoryForm
        },
        data(){
            return {
                item:{
                    id: null,
                    name: null
                }
            }
        },
        computed:{
            rules(){
                return this.$store.getters.getCategoryRules;
            }
        },
        methods: {
            submit() {
                this.$store.dispatch('createCategory', this.item);
            }
        }
    }
</script>