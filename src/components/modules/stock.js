import {stocks} from '../data/stocks'

const state = {
    stocks: []
}

const mutations = {
    "SET_STOCKS"(state, stocks){
        state.stocks = stocks
    },
    "RND_STOCKS"(){
        state.stocks.forEach(stock => {
            stock.price = Math.round(stock.price * (1 + Math.random() - 0.5))
        })
    }
}

const actions = {
    initStocks: ({commit}) => {
        commit("SET_STOCKS", stocks)
    },
    randStocks: ({commit}) => {
        commit("RND_STOCKS")
    },
    buyStocks: ({commit}, order) => {
        commit("BUY_STOCKS", order)
    }
}

const getters = {
    stocks: state => {
        return state.stocks
    }
}

export default {
    state, mutations, actions, getters
}