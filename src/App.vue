<template>
    <div id="app">
        <app-header></app-header>
        <br>
        <section class="col-xs-12 content">
            <router-view></router-view>
        </section>
        <app-footer></app-footer>
    </div>
</template>

<script>
    import Header from './components/Header.vue';
    import Footer from './components/Footer.vue';

    export default {
        components: {
            appHeader: Header,
            appFooter: Footer
        }

    }
</script>

<style>

    * {
        margin:0;
        padding:0;
        list-style:none;
        vertical-align:baseline;
    }

    html, body{
        height:100%;
    }

    #app{
        position: relative;
        padding-bottom: 150px;
        min-height: 100%;
        box-sizing: border-box;
    }
    
    .content {
        overflow: hidden;
        margin-bottom: 50px;
        margin:8px;
    }
    
    a {
        color: #0060B6;
        text-decoration: none;
    }
    
    a:hover {
        color: #00A0C6;
        text-decoration: none;
        cursor: pointer;
    }
</style>