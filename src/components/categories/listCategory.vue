<template>
    <div>
        <el-row type="flex" class="row-bg" justify="end">
            <router-link to="/category/new">
                <el-button type="primary">Nova categoria</el-button>
            </router-link>
        </el-row>
        <br>
        <el-table :data="categories" style="width: 100%" v-if="categories.length > 0" v-loading.body="loading">
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
                    <el-button size="small" type="danger" icon="delete" @click="deleteCategory(scope.row)"></el-button>
                </template>
            </el-table-column>
        </el-table>
        <router-view></router-view>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        data() {
            return {
                categories: [],
                loading:true
            }
        },
        methods: {
            loadCategories() {

                axios.get('/categories').then(response => {

                    this.categories = response.data;
                    this.loading = false;

                }).catch(error => {

                    console.log(error);
                });
            },
            deleteCategory(category) {

                this.$confirm('Deseja realmente excluir a categoria: ' + category.name, 'Exclusão', {
                    confirmButtonText: 'Sim',
                    cancelButtonText: 'Cancelar',
                    type: 'warning'
                }).then(() => {
                    axios.delete(`/categories/${category.id}`).then(response => {

                        if (response.data.error) {
                            this.$message({
                                message: response.data.error,
                                type: 'error',
                                duration: 3700
                            });
                        }

                        if (response.data) {

                            this.$message({
                                type: 'success',
                                message: 'Excluído com sucesso.'
                            });

                            this.loadCategories();
                        }

                    }).catch(error => {
                        console.log(error);
                    });
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: 'Exclusão cancelada.'
                    });
                });
            }
        },
        created() {

            this.loadCategories();
        }
    }
</script>

<style scoped="scoped">
    .posts{
        padding: 4px;
    }
</style>