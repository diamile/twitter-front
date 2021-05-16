<template>
  <div id="app" class="mt-0">
   <Header/>
   <FlashMessage></FlashMessage>
   <!-- <Home :title="title"/> -->
   <router-view class="mt-10"></router-view> 
  </div>
</template>

<script>

import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    Header
  },
  data(){
    return{
      title:"hello"
    }
  },

  computed:{
    jwtToken(){
      return this.$store.getters["signin/getToken"]
    }
  },

  beforeMount(){
    if(this.jwtToken){
      this.$store.dispatch('signin/refreshToken');
    }
  }
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
 
}
</style>
