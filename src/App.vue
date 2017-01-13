<template>
  <div id="app">
    <app-header></app-header>
    <br>
    <div class="col-xs-12 content">
      <router-view></router-view>
    </div>
   
  </div>
</template>

<script>
    import Header from './components/Header.vue';
    import Footer from './components/Footer.vue';

    export default {
        data() {
            return {

            }
        },
        methods: {},
        components: {
            appHeader: Header,
            appFooter: Footer
        }

    }
</script>

<style>
    html,
    body {
        height: 100%;
    }
    
    .content {
        overflow: hidden;
        margin-bottom: 50px;
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