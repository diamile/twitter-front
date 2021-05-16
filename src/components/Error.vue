<template>
   <div class="container">  

  </div>

</template>

<script>
export default {
  props:["data"],
  components:{
   
  },
  methods:{
    displayErrors(){
      if(this.data.length !=0){
        this.flashMessage.error({
        title: this.data[0],
        message: 'Message Here'
        });
      }
   }
  },
 
}
</script>

<style scoped>

</style>
