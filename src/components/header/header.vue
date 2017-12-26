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
.header {
  overflow: hidden;
  background: rgba(7, 17, 27, 0.5);
  color: #fff;
  .content-wrapper {
    padding: 24px 12px 18px 24px;
    .avatar {
      display: inline-block;
      > img {
        width: 64px;
        height: 64px;
        border-radius: 2px;
      }
    }
  }
}
</style>
