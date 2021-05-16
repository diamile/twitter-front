<template>
  <div class="hello">
   <div class="content d-flex flex-row mx-auto">

    <!-- <div class="profile-container">
      Profile
    </div> -->

    <div class="flex-fill">
      <form class="card" @submit.prevent="submitForm">
        <div class="card-header">
            Ecrire un tweet
        </div>
         <div class="card-body">
            <div class="form-group">
               <textarea class="form-control" v-model="form.content"></textarea> 
            </div>

            <div class="w-100">
               <input type="submit" value="send" class="btn btn-primary ml-auto d-block"/>
            </div>
        </div> 

      </form>

       <div v-for="error in errors" :key="error" class="alert alert-danger danger" role="alert" >
        <span v-if="error.content">
        {{error.content.message}}
        </span><br>
        </div>
    </div> 
   </div>
  </div>
</template>

<script>
export default {
  props: ['title'],
  data(){
   return {
       form :{
           content:""
       }
   }
  },
  methods:{
    submitForm(){
        console.log(this.form);
        this.$store.dispatch('tweet/postTweets',this.form);
        this.$router.push('/tweets');
    }
  },
  computed:{
      errors(){
        return this.$store.getters['tweet/getErrors']
      }
  }
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
