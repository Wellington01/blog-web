<template>
    <div>
        <el-row type="flex" class="row-bg" justify="end">
            <router-link to="/post/new">
                <el-button type="primary">Novo post</el-button>
            </router-link>
        </el-row>
        <br>
        <el-table :data="posts" style="width: 100%" v-if="posts.length > 0" v-loading.body="loading">
            <el-table-column label="Nome">
                <template scope="scope">
                    <p>{{ scope.row.name }}</p>
                </template>
            </el-table-column>
            <el-table-column :context="_self" label="Operações" align="right">
                <template scope="scope">
                    <router-link :to="{ name : 'editPost', params: { id: scope.row.id}}">
                        <el-button size="small" type="primary" icon="edit"></el-button>
                    </router-link>
                    <el-button size="small" type="danger" icon="delete" @click="onDelete(scope.row)"></el-button>
                </template>
            </el-table-column>
        </el-table>
        <app-pagination :config="config"></app-pagination>
        <router-view></router-view>
    </div>
</template>

<script>

    import { mapGetters, mapActions } from 'vuex';
    import Pagination from '../Common/pagination.vue';

    export default {
        name:'ListPost',
        data(){
            return {
                "isPaginate" : true
            }
        },
        components:{
            appPagination : Pagination
        },
        computed: {
            ...mapGetters({
                posts : 'allPosts',
                config: 'getConfigPaginatePost'
            })
        },
        methods: {
             ...mapActions([
                'loadPosts',
                'deletePost'
            ]),
            notify(type, message){

                this.$message({
                    message: message,
                    type: type,
                    duration: 3700
                });
            },
            onDelete(post) {

                this.$confirm('Deseja realmente excluir o post: ' + post.name, 'Exclusão', {
                    confirmButtonText: 'Sim',
                    cancelButtonText: 'Cancelar',
                    type: 'warning'
                }).then(() => {

                    this.deletePost({'id':post.id, 'callback': this.notify});
                    this.loadPosts(this.isPaginate);

                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: 'Exclusão cancelada.'
                    });
                });
            }
        },
        created() {

            this.loadPosts(this.isPaginate);
        }
    }
</script>

<style>

</style>