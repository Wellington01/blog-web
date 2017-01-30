<template>
    <el-form :model="item"  label-position="top" :rules="rules" ref="item" class="demo-ruleForm">
        <el-form-item label="Nome" prop="name">
            <el-input v-model="item.name"></el-input>
        </el-form-item>
        <el-form-item label="Categorias" prop="category_id">
            <el-select v-model="item.category_id" placeholder="Selecione a categoria">
                <el-option v-for="category in this.$store.getters.allCategories"
                    :label="category.name"
                    :value="category.id">  
                </el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="Conteúdo" prop="content">
            <el-input type="textarea" v-model="item.content" size="large"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onSubmit('item')">{{ nameActionForm }}</el-button>
            <router-link :to="{name : 'listPost'}"> <el-button>Voltar</el-button></router-link>
        </el-form-item>
    </el-form>
</template>

<script>
    export default {
        name:'PostForm',
        props:{
            item:{
                type: Object,
                required: true
            },
            rules:{
                type: Object,
                required: true
            }
        },
        computed:{
            nameActionForm() {
                return !this.$route.params.id ? "Salvar" : "Alterar";
            }
        },
        methods:{
            onSubmit(formName) {

                this.$refs[formName].validate((valid) => {

                    if (valid) {

                        this.$parent.submit();

                    } else {
                        return false;
                    }
                });
            }
        },
        created(){

            this.$store.dispatch('loadCategories');
        }
    }

</script>