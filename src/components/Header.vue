<template>
   <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <router-link to="/"><img src="../assets/twitter-icon.png" width="25"/></router-link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="flex-fill">

  </div>
  <div class="w-20">
    {{isLoggedIn}}
      <ul class="navbar-nav mr-auto">
      
      <li class="nav-item mr-3" v-if="!isLoggedIn">
        <router-link to="/connexion">Connexion</router-link> 
      </li>
      <li class="nav-item mr-3"  v-if="!isLoggedIn">
        <router-link to="/inscription">Inscription</router-link> 
      </li>

     
      <li class="nav-item active" v-if="isLoggedIn">
        <a class="btn btn-primary btn-tweet mr-3" @click="goTo('newTweet')">creer un tweet<span class="sr-only">(current)</span></a>
      </li>

       <li class="nav-item active" v-if="isLoggedIn">
        <a class="btn btn-primary btn-tweet mr-3" @click="goTo('tweet')">tweets<span class="sr-only">(current)</span></a>
      </li>

      <li class="nav-item mr-3" @click="deconnexion" v-if="isLoggedIn">
        Deconnexion 
      </li>
     </ul>
   
  </div>
</nav>
</template>

<script>
export default {
  props: ['title'],


    computed:{
    isLoggedIn(){
      return this.$store.getters['signin/isLoggedIn']
    }
  },
  
  methods:{
    goTo(data){
      this.$router.push(data)
    },
    deconnexion(){
     this.$store.commit('signin/deconnexion');
    }
  }
}
</script>

<style scoped>
 .btn-tweet{
   border-radius:30px;
 }
</style>










