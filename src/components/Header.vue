<template>
    <div>
        <el-menu default-active="1" class="el-menu-demo" mode="horizontal">
            <router-link to="/" tag="li" activeClass="active"><el-menu-item index="1"><a>Home</a></el-menu-item></router-link>
            <router-link to="/post" tag="li" activeClass="active"><el-menu-item index="2"><a>Post</a></el-menu-item></router-link>
            <router-link to="/category" tag="li" activeClass="active"><el-menu-item index="3"><a>Categoria</a></el-menu-item></router-link>
        </el-menu>
    </div>
</template>

<script>
    export default {
        name: 'header',
    }
</script>

<style>

</style>