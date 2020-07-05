<template>
    <div class="container">
        <app-header></app-header>
        <router-view></router-view>
    </div>
</template>

<script>

import Header from './components/Header.vue'
    export default {
        components:{
            appHeader: Header
        },
        created(){
            console.log(this.$store.dispatch("initStocks"))
            this.$store.dispatch("initStocks")
        }
    }
</script>

<style>
    .container{
        padding-top: 30px;
    }

</style>
