<template>
  <div class="hello">
     <div>{{seller.name}}</div>
  </div>
</template>

<script>
export default {
  props:{
    seller:{
      type:Object
    }
  },
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  div{
    text-align: center;
  }
</style>
