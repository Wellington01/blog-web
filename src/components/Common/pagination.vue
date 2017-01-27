<template>
    <div class="block pagination">
         <el-pagination
            small
            :current-page="item.current_page"
            :page-size="parseInt(item.per_page)"
            @current-change="changePage"
            layout="prev, pager, next"
            :total="item.total">
        </el-pagination> 
    </div>
</template>

<script>
    export default {
        name: 'Pagination',
        props:{
            config:{
                type: Object,
            }
        },
        computed: {
            item(){
                return this.$store.getters.pagination;
            }
        },
        methods:{
            changePage(val){
                this.$store.dispatch('changePage', {page : val, configPagination : this.config});
            }
        },
        created () {
            this.$store.dispatch('clearPagition');
        }
    }
</script>

<style lang="">
    .pagination{
        margin-top: 25px;
        text-align: center;
    }
</style>