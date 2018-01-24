<template>
  <div class="food" v-show="showFlag">
    i am ratings
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../../assets/stylus/mixin"
.food{
  position: fixed;
  left: 0;
  top: 0;
  bottom:48px;
  z-index: 40;
  width: 100%;

}

</style>
