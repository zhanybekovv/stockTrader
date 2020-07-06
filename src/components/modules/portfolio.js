
const state = {
    funds: 10000,
    stocks: []
}

const mutations = {
    "BUY_STOCKS"(state, order){
        const resp = state.stocks.find(element => element.id == order.stockId)
        if(resp){
            resp.quantity += order.stockQuantity
        }else{
            state.stocks.push({
                id: order.stockId,
                quantity: order.stockQuantity
            })
        }
        state.funds -= order.stockPrice
    },
    "SELL_STOCKS"(state, order){
        const resp = state.stocks.find(element => element.id == order.stockId)
        if(resp.quantity > order.stockQuantity){
            resp.quantity -= order.stockQuantity
        }else{
            state.stocks.splice(state.stocks.indexOf(resp), 1)
        }
    }
}

const actions = {
    sellStocks: ({commit}, order) => {
        console.log(order)
        commit("SELL_STOCKS", order)
    }
}

const getters = {
    stockPortfolio: (state, getters) => {
        return state.stocks.map(element => {
            const resp = getters.stocks.find(item => item.id == element.id)
            return{
                id: element.id,
                price: resp.price,
                quantity: element.quantity,
                name: resp.name
            }
        })
    },
    funds: (state) =>{
        return state.funds
    }
}

export default {
    state, mutations, actions, getters
}