
import axios from "../https"
import router from "../routes"
//creation de mon module(namespace)
const signin = {
    namespaced:true,
    state:{
      login:false,
      errors:[],
      user:{},
      jwtToken:localStorage.getItem('jwtToken'),
      currentUser:{},
      isLoggedIn:localStorage.getItem('jwtToken') ? true : false,
      refreshToken:{},
      refreshTokenError:false,
      follow : []
    },
    getters:{
       getLogin(state){
           return state.login
       },
       getUser(state){
           return state.user
       },
       getToken(state){
           return state.jwtToken
       },
       getCurrentUser(state){
           console.log("state.currentUser",state.currentUser)
           return state.currentUser
       },
       isLoggedIn(state){
           return state.isLoggedIn
       }
    },
    actions:{
       postLogin({commit},data){
         console.log('data',data)
         console.log("https",this.$https);

         let headers =  {
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
            "Access-Control-Allow-Origin":"https://localhost:3001"
          }
         axios.post('/api/auth',data,headers,{withCredentials: true})
         .then((res)=>{
            console.log('res',res.data);
            commit('getUser',res.data);
            router.push('/tweets');
            location.reload()
            })
         .catch((err)=>{
             console.log('err',err.response.data.nom.message);
             commit('getErrors',err)
         })
       },

       currentUser({commit}){
        console.log("ici");
        axios.get('https://www.dakarspectatornews.com:443/current/user')
        .then((res)=>{
          console.log('ressss',res.data)
          commit('currentUser',res.data)
        })
        .catch((err)=>{
         console.log(err)
        })
       },
       refreshToken({commit,dispatch}){
        axios.get('https://www.dakarspectatornews.com:443/token/refresh-token')
        .then((res)=>{
            setTimeout(()=>{
                dispatch('refreshToken');
              },14 * 60 * 1000)
    
            commit('refreshTokenSuccess',res.data)
        })
        .catch((err)=>{
            commit('refreshTokenError',err);
        })
      },
    },
   
    mutations:{
     getFollow(state,data){
         state.follow.push(data);
     },
     getErrors(state,data){
      state.errors.push(data)
     },
     getUser(state,data){
        state.user = data.user;
        localStorage.setItem('jwtToken',data.jwtToken)
     },
     currentUser(state,data){
         state.currentUser = data;
     },
     deconnexion(state){
      state.isLoggedIn=false;
      state.jwtToken = null;
      state.currentUser = null;
      localStorage.removeItem('jwtToken');
      router.push('/connexion');
     },
     refreshTokenSuccess(state,data){
         state.refreshToken = data
     },
     refreshTokenError(state,data){
        state.refreshTokenError = data
     }
    }
}



export default signin;