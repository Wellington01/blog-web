<template>
    <div>
        <el-row type="flex" class="row-bg" justify="end">
            <router-link :to="{name : 'createCategory'}">
                <el-button type="primary">Nova categoria</el-button>
            </router-link>
        </el-row>
        <br>
        <el-table :data="categories" v-if="categories.length > 0">
            <el-table-column type="expand" >
                <template scope="scope">
                    <h3> Posts relacionados</h3>
                    <ul prop="posts" v-if="scope.row.posts.length > 0">
                        <li v-for="post in scope.row.posts" class="posts">
                           <router-link :to="{ name : 'viewPost', params: { id: post.id}}"> <span>{{post.name}}</span></router-link>
                        </li>
                    </ul>
                    <p v-else>Nenhum post relacionado a essa categoria.</p>
                </template>
            </el-table-column>
            <el-table-column label="Nome" prop="name">
            </el-table-column>
            <el-table-column :context="_self" label="Operações" align="right">
                <template scope="scope">
                    <router-link :to="{ name : 'editCategory', params: { id: scope.row.id}}">
                        <el-button size="small" type="primary" icon="edit"></el-button>
                    </router-link>
                    <el-button size="small" type="danger" icon="delete" @click="onDelete(scope.row)"></el-button>
                </template>
            </el-table-column>
        </el-table>
        <app-pagination :config="config"></app-pagination>
    </div>
</template>

<script>

    import { mapGetters, mapActions } from 'vuex';
    import Pagination from '../Common/pagination.vue';

    export default {
        name: 'ListCategory',
        data(){
            return {
                isPaginate: true
            }
        },
        components:{
            appPagination : Pagination
        },
        computed: {
            ...mapGetters({
                categories : 'allCategories',
                config : 'getConfigPaginateCategory'
            })
        },
        methods: {
            ...mapActions([
                'loadCategories',
                'deleteCategory'
            ]),
            notify(type, message){

                this.$message({
                    message: message,
                    type: type,
                    duration: 3700
                });
            },
            onDelete(category) {

                this.$confirm('Deseja realmente excluir a categoria: ' + category.name, 'Exclusão', {
                    confirmButtonText: 'Sim',
                    cancelButtonText: 'Cancelar',
                    type: 'warning'
                }).then(() => {

                    this.deleteCategory({'id':category.id, 'callback': this.notify});
                    this.loadCategories(this.isPaginate);

                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: 'Exclusão cancelada.'
                    });
                });
            }
        },
        created() {
            this.loadCategories(this.isPaginate)
                .then(function(a,b,c) {
                    console.log(a,b,c);
                })
                .catch(function() {});
        }
    }
</script>

<style scoped="scoped">
    .posts{
        padding: 4px;
    }
</style>