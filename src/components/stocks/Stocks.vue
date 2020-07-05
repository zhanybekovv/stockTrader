<template>
    <div>
        <app-stock v-for="stock in stocks" :stock='stock'></app-stock>
    </div>
</template>

<script>
import Stock from './Stock.vue'
export default {
    data(){
        return{
            stocks:[
                {id: 1, name: "BMW", price: 180},
                {id: 2, name: "Google", price: 250},
                {id: 3, name: "Tesla", price: 270},
                {id: 4, name: "Kaspi", price: 300}
            ]
        }
    },
    components:{
        appStock: Stock
    }
}
</script>