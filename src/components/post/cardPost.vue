<template>
    <div>
        <el-row >
            <el-col :span="10" v-for="(post, index) in posts" :offset="1" class="card">
                <el-card class="box-card" >
                    <div slot="header" class="clearfix">
                       <router-link :to="{ name : 'viewPost', params: { id: post.id}}"> <span style="line-height: 36px;">{{post.name}}</span></router-link>
                    </div>
                    <el-rate v-model="post.rating" disabled></el-rate>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        data() {
            return {
                posts: []
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
            }
        },
        created() {
            this.loadPost();
        }
    }
</script>

<style>
    .card {
        width: 49.66667%;
        margin-left: 0.16667%;
        padding: 5px;
    }
</style>