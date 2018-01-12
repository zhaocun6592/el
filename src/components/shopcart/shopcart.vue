<template>
  <div class="shopcart">
    <div class="content">
      <div class="content-left">
        <div class="logo-wrapper">
          <div class="logo">
            <i class="icon-shopping_cart"></i>
          </div>
        </div>
        <div class="price"></div>
        <div class="desc"></div>
      </div>
      <div class="content-right"></div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'cart'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.shopcart{
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 100;
  width: 100%;
  height: 48px;
  .content{
    display: flex;
    width: 100%;
    height: 100%;
    background: #141d27;
    font-size:0;
    .content-left{
      flex:1;
      .logo-wrapper{
        display: inline-block;
        position: relative;
        top: -10px;
        margin: 0 12px;
        padding: 6px;
        width: 56px;
        height: 56px;
        box-sizing: border-box;
        border-radius:50%;
         background: #141d27;
         .logo{
           width:100%;
           height: 100%;
           background: #2b343c;
          border-radius:50%;
           text-align: center;
           .icon-shopping_cart{
             line-height: 44px;
             font-size: 24px;
             color: #80858a;

           }
         }
      }
    }
    .content-right{
      flex:0 0 105px;
      width:105px;
    }
  }
}

</style>
