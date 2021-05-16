import Vue from "vue"
import Vuex from "vuex"
import tweet from "./tweet"
import signin from "./signin"
import signup from "./signup"

Vue.use(Vuex);

const store = new Vuex.Store({
    modules:{
        tweet,
        signin,
        signup
    }
})


export default store;