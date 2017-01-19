<template>
    <nav>
        <el-menu :default-active="activeName" class="el-menu-demo" mode="horizontal">
            <router-link to="/" tag="li" ><el-menu-item index="/"><a>Home</a></el-menu-item></router-link>
            <router-link to="/post" tag="li" ><el-menu-item index="/post"><a>Post</a></el-menu-item></router-link>
            <router-link to="/category" tag="li" ><el-menu-item index="/category"><a>Categoria</a></el-menu-item></router-link>
        </el-menu>
    </nav>
</template>

<script>
    export default {
        name: 'header',
        data(){
            return {
                activeName:'/'
            }
        },
        created(){
            this.activeName = this.$route.path;
        }
    }
</script>

<style>
    nav {
        margin:8px;
    }
</style>