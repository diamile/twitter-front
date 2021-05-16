import axios from "axios";
import store from "./modules/index"
import Vue from "vue"
axios.interceptors.request.use((request)=>{
    const jwtToken = store.getters['signin/getToken'];

    if(jwtToken){
        //alteration de la requete
        request.headers['Authorization'] = `Bearer ${jwtToken}`
    }

    return request;
})

Vue.prototype.$http = axios ;
export default axios;