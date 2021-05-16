<template>
  <div class="container-fluid" >
   <div class="content d-flex flex-row container-fluid ">

    <div class="profile-container mr-20 " style="height:300px">
      Profile

      <h4>{{user.name}}</h4>
      <h5>{{user.email}}</h5>
       <h5>{{user.followers.length}}</h5>
     
    </div>

    <div class="flex-fill w-70 " style="margin-left:100px;">
      <TwitterList/>
    </div> 
   </div>
  
  </div>
</template>

<script>
import TwitterList from "./Twitter-list"
export default {
  props: ['title'],
  components:{
   TwitterList,
  },
  computed:{
    user(){
      console.log('this',this.$store.getters['signin/getCurrentUser'])
      return this.$store.getters['signin/getCurrentUser']
    }
  },
 mounted(){
   this.$store.dispatch('signin/currentUser');
 }
}
</script>

<style scoped>
.content{
  max-width:1300px;
}

.profile-container{
  width:30%;
  max-width:300px;
  background-color:red;
}
.hello{
 margin-top:20px !important
}
</style>
