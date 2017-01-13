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
        <el-button size="small" type="danger" icon="delete" @click="deletePost(scope.row)"></el-button>
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
                posts: [],
                loading: true
            }
        },
        methods: {
            loadPost() {

                axios.get('/posts').then(response => {

                    this.posts = response.data;
                    this.loading = false;

                }).catch(error => {

                    console.log(error);
                });
            },
            deletePost(post) {

                this.$confirm('Deseja realmente excluir o post: ' + post.name, 'Exclusão', {
                    confirmButtonText: 'Sim',
                    cancelButtonText: 'Cancelar',
                    type: 'warning'
                }).then(() => {
                    axios.delete(`/posts/${post.id}`).then(response => {

                        if (response.data) {

                            this.$message({
                                type: 'success',
                                message: 'Excluído com sucesso.'
                            });

                            this.loadPost();
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

            this.loadPost();
        }
    }
</script>

<style>

</style>