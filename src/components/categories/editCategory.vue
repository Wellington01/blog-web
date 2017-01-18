<template>
    <app-category-form :item="item" :rules="rules"></app-category-form>
</template>

<script>

    import { mapGetters, mapActions } from 'vuex';
    import CategoryForm from './formCategory.vue'

    export default {
        name:'CategoryEdit',
        components:{
            appCategoryForm : CategoryForm
        },
        computed:{
            ...mapGetters({
                    item : 'getCategory',
                    rules: 'getRules'
            })
        },
        methods: {
            ...mapActions([
                'loadCategory',
                'updateCategory'
            ]),
            submit() {
                this.updateCategory({'id': this.item.id,'category': this.item});
            }
        },
        created(){

            let categoryId = this.$route.params.id;

            if(categoryId){
                this.loadCategory(categoryId);
            }
        }
    }
</script>