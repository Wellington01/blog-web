<template>
    <div>
        <el-form :model="post"  label-position="top" :rules="rules" ref="post" class="demo-ruleForm">
            <el-form-item label="Nome" prop="name">
                <el-input v-model="post.name"></el-input>
            </el-form-item>
            <el-form-item label="Categorias" prop="category_id">
                <el-select v-model="post.category_id" placeholder="Selecione a categoria">
                    <el-option v-for="category in categories"
                        :label="category.name"
                        :value="category.id">  
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="Conteúdo" prop="content">
                <el-input type="textarea" v-model="post.content" size="large"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit('post')" v-if="isEdit">Salvar</el-button>
                <el-button type="primary" @click="OnUpdate('post')" v-else>Alterar</el-button>
                <router-link to="/post"> <el-button>Voltar</el-button></router-link>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        data() {
            return {
                rules: {
                    name: [{
                        required: true,
                        message: 'Nome é obrigatório.',
                        trigger: 'blur'
                    }, {
                        min: 3,
                        message: 'Nome deve conter no mínimo 3 caracteres.',
                        trigger: 'blur'
                    }],
                    category: [{
                        required: true,
                        message: 'Categoria é obrigatório.',
                        trigger: 'change'
                    }],
                    content: [{
                        required: true,
                        message: 'Conteúdo é obrigatório.',
                        trigger: 'blur'
                    }, {
                        min: 140,
                        max: 8000,
                        message: 'Conteúdo deve conter no mínimo 140 caracteres e no máximo 8000.',
                        trigger: 'blur'
                    }],
                },
                post: {
                    'id': '',
                    'name': '',
                    'content': '',
                    'category_id': ''
                },
                categories: []
            }
        },
        computed: {
            isEdit() {
                return !this.postId();
            }
        },
        methods: {
            postId() {
                return this.$route.params.id;
            },
            randomRage() {
                return Math.random() * (6 - 1) + 1;
            },
            onSubmit(formName) {

                this.$refs[formName].validate((valid) => {

                    if (valid) {

                        this.post.rating = this.randomRage();

                        axios.post('/posts', this.post)
                            .then(response => {

                                window.location.href = "/post";
                            })
                            .catch(error => {
                                console.log(error);
                            });
                    } else {
                        return false;
                    }
                });
            },
            OnUpdate(formName) {

                this.$refs[formName].validate((valid) => {

                    if (valid) {

                        axios.put(`/posts/${this.postId()}`, this.post)
                            .then(response => {

                                window.location.href = "/post";
                            })
                            .catch(error => {
                                console.log(error);
                            });
                    } else {
                        return false;
                    }
                });
            },
            loadPostById(id) {

                axios.get(`/posts/${id}`)
                    .then(response => {

                        this.post = response.data;
                        console.log(response);
                    })
                    .catch(error => {
                        console.log(error);
                    });
            },
            loadCategories() {
                axios.get('/categories').then(response => {

                    this.categories = response.data;

                }).catch(error => {

                    console.log(error);
                });
            }
        },
        created() {

            this.loadCategories();

            let postId = this.postId();

            if (postId) {
                this.loadPostById(postId);
            }
        }
    }
</script>