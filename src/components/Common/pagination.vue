<template>
    <div class="block pagination">
         <el-pagination
            :current-page="item.current_page"
            :page-size="item.per_page"
            layout="total, prev, pager, next"
            :total="item.total">
        </el-pagination> 
    </div>
</template>

<script>
    export default {
        name: 'Pagination',
        computed: {
            item(){
                return this.$store.getters.pagination;
            }
        }
    }
</script>

<style lang="">
    .pagination{
        margin-top: 25px;
        text-align: center;
    }
</style>