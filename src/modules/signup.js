
import  axios from "axios"
// import router from "../routes"
//creation de mon module(namespace)
const signup = {
    namespaced:true,
    state:{
      users:[],
      signupSucess:false,
      signupFailed:[]
    },
    getters:{
      getSignupSuccess(state){
       return state.signupSucess
      },
      getSignupFailed(state){
        return state.signupFailed
      }
    },
    actions:{
     postUsers({commit},data){
      let headers =  {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
      }
       axios.post('https://localhost:3001/api/users',data,headers)
       .then((res)=>{
         console.log('res',res)
         if(res.data){
          //router.push('/connexion')
          console.log("ICI")
          commit('postSuccess',res.data)
         }
       
       })
       .catch((err)=>{
        if(err){
            console.log('poooppm')
            console.log(err.response.data.nom.message)
            commit('postFair',err.response.data.nom.message)
        }
       })
     }
    },
    mutations:{
      postSuccess(state,data){
      state.signupSucess =  data
     },
     postFair(state,data){ 
        state.signupFailed = [];
        state.signupFailed.push(data);
       }
    }
}


export default signup;