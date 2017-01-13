<template>
    <div>
        <el-form :model="category"  label-position="top" :rules="rules" ref="category" class="demo-ruleForm">
            <el-form-item label="Nome" prop="name">
                <el-input v-model="category.name"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit('category')" v-if="isEdit">Salvar</el-button>
                <el-button type="primary" @click="OnUpdate('category')" v-else>Alterar</el-button>
                <router-link to="/category"> <el-button>Voltar</el-button></router-link>
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
                },
                category: {
                    'id': '',
                    'name': ''
                }
            }
        },
        computed: {
            isEdit() {
                return !this.categoryId();
            }
        },
        methods: {
            categoryId() {
                return this.$route.params.id;;
            },
            onSubmit(formName) {

                this.$refs[formName].validate((valid) => {

                    if (valid) {
                        axios.post('/categories', this.category)
                            .then(response => {

                                window.location.href = "/category";
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
                        axios.put(`/categories/${this.categoryId()}`, this.category)
                            .then(response => {

                                window.location.href = "/category";
                            })
                            .catch(error => {
                                console.log(error);
                            });
                    } else {
                        return false;
                    }
                });
            },
            loadCategoryById(id) {

                axios.get(`/categories/${id}`)
                    .then(response => {

                        this.category = response.data;

                    })
                    .catch(error => {
                        console.log(error);
                    });
            }
        },
        created() {

            let categoryId = this.categoryId();

            if (categoryId) {
                this.loadCategoryById(categoryId);
            }
        }
    }
</script>