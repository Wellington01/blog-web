<template>
    <app-category-form :item="item" :rules="this.$store.getters.getCategoryRules"></app-category-form>
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
        methods: {
            submit() {
                this.$store.dispatch('createCategory', this.item);
            }
        }
    }
</script>