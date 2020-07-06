<template>
    <div class="col-sm-6 col-md-4">
        <div class="panel panel-success">
            <div class="panel-heading">
                <h3 class="panel-title">
                    {{stock.name}} 
                    <small>(Price: {{stock.price}}})</small>
                </h3>
            </div>
            <div class="panel-body">
                <div class="pull-left">
                    <input type="number" class="form-control" placeholder="Quantity" v-model="quantity">
                </div>
                <div class="pull-right">
                    <button class="btn btn-success"  @click="buyStock" :disabled="insuffFunds || quantity <= 0">
                        {{ insuffFunds ? "Insufficient" : "Buy"}}
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ["stock"],
    data(){
        return{
            quantity: 0
        }
    },
    computed:{
        funds(){
            return this.$store.getters.funds
        },
        insuffFunds(){
            return this.quantity * this.stock.price > this.funds
        }
    },
    methods:{
        buyStock(){
            const order = {
                stockQuantity: this.quantity,
                stockPrice: this.stock.price,
                stockId: this.stock.id
            }
            this.$store.dispatch("buyStocks", order)
            console.log(this.$store.stockPortfolio)
            // console.log(Number.isInteger(parseInt(this.quantity)))   
            this.quantity = 0
        }
    }
}
</script>