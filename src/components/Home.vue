<template>
    <div>
        <h1>Home</h1>
        <h6>Funds | {{funds | currency}}</h6>
    </div>
</template>

<script>
export default {
    computed:{
        funds(){
            return this.$store.getters.funds
        }
    }
}
</script>