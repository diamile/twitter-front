<template>
  <div class="hello">
   <div class="content d-flex flex-row mx-auto">
   
    <!-- <div class="profile-container w-25">
      
    </div> -->

    <div class="flex-fill">
    
     <div class="column" v-if="tweets">
      
        <div class="col-sm-8"  v-for="(tweet,i) in tweets" :key="tweet._id" >
          <div class="card">
            <div  class="d-flex flew-row" style="height:40px">
              <div class="flex-fill w-10">
                {{tweet.content}}
              </div>
               <span class="flex-fill w-30"> </span>
              <div style="width:90px">
               <span @click="updateTweet(i,tweet._id)" style="margin-right:15px"><i class="fa fa-edit" style="color:blue"></i></span>
               
               <span  @click="deletedTweet(tweet._id)" style="margin-left:15px;"><i class="fa fa-trash" style="color:red"></i></span>

              <span  @click="likeTweet(tweet._id)" style="margin-left:15px;" ><i class="fa fa-gratipay" style="color:green"></i></span>

              </div>
            </div>
          </div>
          <form v-if="isUpdate && currentUserTweet===i" @submit.prevent="submitUpdateForm(tweet._id,form.content)">
           <div class="form-outline mb-4">
             <input type="text" id="form6Example6" class="form-control" v-model="form.content" value="test" />
              <div class="d-flex flew-row mt-10">
               <span ><i class="fa fa-plus-square"></i></span>
              </div>

            
            </div>
           
          </form>
        </div>
      </div>

    </div> 
   </div>
  </div>
</template>

<script>
export default {
  props: ['title'],
  data(){
   return{
     isUpdate:false,
     currentTweet:0,
     form:{content:""}
   }
  },
  methods:{
    submitForm(){
        console.log(this.form);
        this.$store.dispatch('tweet/postTweets',this.form)
        document.location.reload(true);
    },
    deletedTweet(id){
     console.log('id',id);
     this.$store.dispatch('tweet/deletedUserTweet',id);
     document.location.reload(true);
    },
    updateTweet(i,id){
     console.log('id',id)
     this.$store.commit('tweet/selectedItem',i)
     this.isUpdate =!this.isUpdate;
    },
     likeTweet(target){
      console.log('target',target)
      this.$store.dispatch('tweet/getUserTweets',target)
    },
    submitUpdateForm(id,content){
     console.log("id",id);
     console.log('content',content)
     const send = {id,content};
     this.$store.dispatch('tweet/actionUpdateTweet',send);
     this.isUpdate = false;
     document.location.reload(true);
    },
    goTo(target){
      this.$router.push(target)
    }
  },

  computed:{
   tweets(){
     return this.$store.getters['tweet/getTweets'];
   },
   currentUserTweet(){
      return this.$store.getters['tweet/getSelectedItem']
    }
  },
 mounted(){
    this.$store.dispatch('tweet/getTweet');
    
    this.$cookies.set('post',"dev");
    console.log("cookie",document.cookie);
    
 },


}
</script>

<style scoped>
.content{
  max-width:1000px;
}

.profile-container{
  width:30%;
  max-width:300px;
}

.hello{
 margin-top:20px !important
}
</style>
