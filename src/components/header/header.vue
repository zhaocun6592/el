<template>
  <div class="header">
     <div class="content-wrapper">
       <div class="avatar">
          <img :src="seller.avatar" />
       </div>
       <div class="content">
          <div class="title">
               <span class="brand"></span>
               <span class="name">{{seller.name}}</span>
             </div>
                <div class="description">
       {{seller.description}}/{{seller.deliveryTime}}分钟送达
          </div>
      </div>
     </div>
     
  </div>
</template>

<script>
export default {
  props: {
    seller: {
      type: Object
    }
  },
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "header.scss";
</style>
