
import axios from "axios"

//creation de mon module(namespace)
const tweet = {
    namespaced:true,
    state:{
        tweets:[],
        isLoading:false,
        errors:[],
        currentItem:null
    },
    getters: {
     getTweets: state => state.tweets,
     isLoading: state =>state.isLoading,
     getErrors: state =>state.errors,
     getSelectedItem: state=>state.currentItem,
    },
    actions: {
        getTweets({commit}){
          axios.get('https://www.dakarspectatornews.com:443/api/tweets',{ withCredentials: true})
          .then((response)=>{
              console.log("response",response.data)
              commit('setTweets',response.data);
              
            })
          .catch(err=>console.log(err))
        },

        getTweet({commit}){
          axios.get('https://www.dakarspectatornews.com:443/api/tweet',{ withCredentials: true})
          .then((response)=>{
              console.log("response",response.data)
              commit('setTweets',response.data);
              
            })
        },
        getUserTweets({commit},id){
          axios.get('https://www.dakarspectatornews.com:443/api/userTweet/'+id)
          .then((res)=>{commit('getFollow',res.data)})
          .catch((err)=>{console.log('err',err)})
         },
     
        postTweets({commit},data){
            axios.post('https://www.dakarspectatornews.com:443/api/tweets',data)
            .then(()=>{
                commit('setTweetSuccess',true);
                setTimeout(()=>{
                  location.reload();
                },0.1)
               
              })
            .catch(err=>commit('setTweetError',err))
        },

        deletedUserTweet({commit},id){
          console.log('id',id);
          axios.delete('https://www.dakarspectatornews.com:443/api/tweets/'+id)
          .then(()=>{
              //location.reload();
              commit('setTweetSuccess',true);
            })
          .catch(err=>commit('setTweetError',err))
      },

      actionUpdateTweet({commit},data){
        console.log("data dans actionUpdateTweet",data)
        axios.put('https://www.dakarspectatornews.com:443/api/tweets/update',data)
        .then(()=>{
            //location.reload();
            commit('setTweetSuccess',true);
            setTimeout(()=>{
              location.reload();
            },0.01)
          })
        .catch(err=>commit('setTweetError',err))
    },
        
    },

    mutations:{
        setTweetSuccess(state,data){
           state.isTweet = data;
        },
        setTweets(state,data){
          console.log('data',data);
           state.tweets = data;
        },
        setTweetError(state,err){
          if(err.response.data){
            state.errors.push(err.response.data);
          }
         
        },
        selectedItem(state,id){
          state.currentItem = id
        }
    }
}

export default tweet;