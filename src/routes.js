import vueRouter from "vue-router";
import vue from "vue";
import TwitterForm from "./components/Twitter-form"
import Home from "./components/Home";
import Connexion from "./components/Connexion";
import Inscription from "./components/Inscription";
import store from "./modules/"
import Tweet from "./components/Tweets"
vue.use(vueRouter);

const isLoggedIns = (to,from,next)=>{
    if(store.getters['signin/isLoggedIn']){
      console.log('ici');
      console.log('to',to);
      console.log('from',from);
     
      next()
    } else if(store.getters['signin/isLoggedIn'] === null){
        console.log('iicicciicic');
      const unsubscribe = store.subscribe(mutation =>{
        if(mutation.type === "signin/refreshTokenSuccess"){
            console.log('lalalalalala')
          unsubscribe();
          //next();
          router.push("/tweets")
        }else if(mutation.type === "signin/refreshTokenError"){
            console.log('iciclalalallaa')
          unsubscribe();
          router.push('/connexion');
        }
      }
      )
    }
    else{
        router.push('/connexion')
    }
  }

const router = new vueRouter({
    mode:"history",
    routes:[
        
        {path:"/",component:Connexion},
        {path:"/tweets",beforeEnter:isLoggedIns,component:Home},
        {path:"/newTweet", component:TwitterForm},
        {path:"/connexion", component:Connexion },
        {path:"/inscription", component:Inscription },
        {path:"/tweet", component:Tweet },

    ]
})


export default router;