<template>
  <div class="shopcart">
    <div class="content">
      <div class="content-left">
        <div class="logo-wrapper">
          <div class="logo" :class="{'heightlight':count>0}">
            <i class="icon-shopping_cart" :class="{'heightlight':count>0}" ></i>
          </div>
          <div class="num" v-show="count>0">{{count}}</div>
        </div>
        <div class="price">￥{{totalPrice}}</div>
        <div class="desc">另需配送费￥{{deliveryPrice}}</div>
      </div>
      <div class="content-right">
        <div class="pay" :class="payClass">{{paydesc}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    selectFoods: {
      type: Array,
      default() {
        return [
          {
            price: 0,
            count: 0
          }
        ];
      }
    },
    deliveryPrice: {
      type: Number,
      default: 0
    },
    minPrice: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      msg: "cart"
    };
  },
  computed: {
    count() {
      let count = 0;
      this.selectFoods.forEach(food => {
        count += food.count;
      });
      return count;
    },
    totalPrice() {
      let num = 0;
      this.selectFoods.forEach(food => {
        num += food.price * food.count;
      });
      return num;
    },
    paydesc(){
      if(this.totalPrice === 0){
        return `￥${this.minPrice}起配送`
      }else if(this.totalPrice<this.minPrice){
          let payWorse =this.minPrice - this.totalPrice
          return `还差￥${payWorse}元配送`
      }else{
          return "去结算"
      }
    },
    payClass(){
      if(this.totalPrice<this.minPrice){
        return "not-enough"
      }else{
        return "enough"
      }
    }

  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.shopcart {
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 100;
  width: 100%;
  height: 48px;
  .content {
    display: flex;
    width: 100%;
    height: 100%;
    background: #141d27;
    color: rgba(255, 255, 255, 0.4);
    font-size: 0;
    .content-left {
      flex: 1;
      .logo-wrapper {
        display: inline-block;
        position: relative;
        top: -10px;
        margin: 0 12px;
        padding: 6px;
        width: 56px;
        height: 56px;
        box-sizing: border-box;
        border-radius: 50%;
        background: #141d27;
        .logo {
          width: 100%;
          height: 100%;
          background: #2b343c;
          border-radius: 50%;
          text-align: center;
          &.heightlight{
              background: rgb(0, 160, 220)
          }
          .icon-shopping_cart {
            line-height: 44px;
            font-size: 24px;
            color: #80858a;
            &.heightlight{
              color: #fff;
            }
          }
        }
        .num {
          position: absolute;
          right: 0;
          top: 0;
          width: 24px;
          height: 16px;
          line-height: 16px;
          text-align: center;
          border-radius: 16px;
          font-size: 9px;
          font-weight: 700;
          color: #fff;
          background: rgb(240, 20, 20);
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4);
        }
      }
      .price {
        display: inline-block;
        vertical-align: top;
        margin-top: 12px;
        line-height: 24px;
        padding-right: 12px;
        box-sizing: border-box;
        border-right: 1px solid rgba(255, 255, 255, 0.1);
        font-size: 16px;
        font-weight: 700;
      }
      .desc {
        display: inline-block;
        vertical-align: top;
        margin: 12px 0 0 12px;
        line-height: 24px;
        font-size: 10px;
      }
    }
    .content-right {
      flex: 0 0 105px;
      width: 105px;
      .pay {
        height: 48px;
        line-height: 48px;
        text-align: center;
        font-size: 12px;
        font-weight: 700;
        background: #2b333b;
        &.not-enough{
            background: #2b333b;
        }
        &.enough{
            background: #00b43c;
            color:#fff
        }
      }
    }
  }
}
</style>
