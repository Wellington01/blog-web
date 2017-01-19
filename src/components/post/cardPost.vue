<template>
        <el-row :gutter="20">
            <el-col :span="12" v-for="(post, index) in posts" class="card">
                <el-card class="box-card" >
                    <div slot="header" class="clearfix">
                       <router-link :to="{ name : 'viewPost', params: { id: post.id}}"> <span style="line-height: 36px;">{{post.name}}</span></router-link>
                    </div>
                    <el-rate v-model="post.rating" disabled></el-rate>
                </el-card>
            </el-col>
        </el-row>
</template>

<script>
    export default {
        name:'CardPost',
        props:{
            posts:{
                type: Array,
                required: true
            },
        }
    }
</script>

<style>
    .card {
        padding: 5px;
    }
</style>