<template>
  <div class="goods">
    <div class="menu-wrapper" ref="menuWrapper">
      <ul class="menu-ul">
        <li v-for="(item,index) in goods" class="menu-item" :class="{current:currentIndex==index}" @click="selectMenu(index,$event)" ref="menuList">
          <span class="text border-bottom">
            <span v-show="item.type>0" class="icon" :class="classMap[item.type]"></span>{{item.name}}
          </span>
        </li>
      </ul>
    </div>
    <div class="food-wrapper" ref="foodWrapper">
      <ul>
        <li v-for="item in goods" class="food-list" ref="foodList">
          <h1 class="title">{{item.name}}</h1>
          <ul>
            <li v-for="food in item.foods" class="food-item border-bottom">
              <div class="icon">
                <img width="57" height="57" :src="food.icon">
              </div>
              <div class="content">
                <h2 class="name">{{food.name}}</h2>
                <p class="desc">{{food.description}}</p>
                <div class="extra">
                  <span class="count">月售{{food.sellCount}}份</span>
                  <span>好评率{{food.rating}}%</span>
                </div>
                <div class="price">
                  <span class="now">￥{{food.price}}</span>
                  <span class="old" v-show="food.oldPrice">￥{{food.oldPrice}}</span>
                </div>
                <div class="cart-wrapper">
                  <cart-control :food="food"></cart-control>
                </div>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <shopchart :selectFoods="selectFoods" :deliveryPrice="seller.deliveryPrice" :minPrice="seller.minPrice"></shopchart>
  </div>
</template>

<script>
import BScroll from "better-scroll";
import shopchart from "../shopcart/shopcart"
import cartControl from "../cartcontrol/cartcontrol"
const ERR_OK = 0;
export default {
  props:{
    seller:{
      type:Object
    }
  },
  components:{
    shopchart,
    cartControl
  },
  data() {
    return {
      mess: "123",
      goods: {},
      scrollY: "",
      listHeight: []
    };
  },
  created() {
    this.classMap = ["decrease", "discount", "special", "invoice", "guarantee"];
    this.$http.get("/api/goods").then(response => {
      response = response.body;
      console.log(response);
      if (response.errno === ERR_OK) {
        this.goods = response.data;
        // setTimeout(this._initScroll, 30);
        this.$nextTick(() => {
          this._initScroll();
          this._calculateHeight();
        });
      }
    });
  },
  computed: {
    currentIndex() {
      for (let i = 0; i < this.listHeight.length; i++) {
        let height = this.listHeight[i];
        let height2 = this.listHeight[i + 1];
        if (!height2 || (this.scrollY >= height && this.scrollY < height2)) {
          this.menuFllow(i);
          return i;
        }
      }
      return 0;
    }
  },
  methods: {
    _initScroll() {
      this.menuScroll = new BScroll(this.$refs.menuWrapper, {
        click: true
      });
      this.foodScroll = new BScroll(this.$refs.foodWrapper, {
        click: true,
        probeType: 3
      });
      this.foodScroll.on("scroll", pos => {
        if (pos.y <= 0) {
          this.scrollY = Math.abs(Math.round(pos.y));
        }
      });
    },
    _calculateHeight() {
      let height = 0;
      let foodLi = this.$refs.foodList;
      this.listHeight.push(height);
      foodLi.forEach((item, i) => {
        height += item.clientHeight;
        this.listHeight.push(height);
        /*   console.log(this.listHeight); */
      });
    },
    selectMenu(index, event) {
      console.log(index);
      if (!event._constructed) {
        return;
      }
      let foodList = this.$refs.foodList;
      let el = foodList[index];
      this.foodScroll.scrollToElement(el, 300);
    },
    menuFllow(index) {
      let menu = this.$refs.menuList;
      let el = menu[index];
      this.menuScroll.scrollToElement(el, 300, 0, -100);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../../assets/stylus/mixin";
.goods {
  display: flex;
  position: absolute;
  top: 174px;
  bottom: 46px;
  width: 100%;
  overflow: hidden;
  .menu-wrapper {
    flex: 0 0 80px;
    width: 80px;
    background: #f3f5f7;
    .menu-item {
      display: table;
      padding: 0 12px;
      height: 54px;
      width: 56px;
      line-height: 14px;
      &.current {
        position: relative;
        z-index: 10;
        margin-top: -1px;
        background: #fff;
        .text {
          filter: grayscale(0%);
          font-weight: 700;
          @include border-none();
        }
      }
      .text {
        display: table-cell;
        width: 56px;
        vertical-align: middle;
        filter: grayscale(70%);
        @include border-bottom(rgba(7, 17, 27, 0.1));
        font-size: 13px;
        .icon {
          display: inline-block;
          vertical-align: top;
          width: 12px;
          height: 12px;
          margin-right: 2px;
          background-size: 12px 12px;
          background-repeat: no-repeat;
          &.decrease {
            @include bg-image("decrease_3");
          }
          &.discount {
            @include bg-image("discount_3");
          }
          &.guarantee {
            @include bg-image("guarantee_3");
          }
          &.invoice {
            @include bg-image("invoice_3");
          }
          &.special {
            @include bg-image("special_3");
          }
        }
      }
    }
  }
  .food-wrapper {
    flex: 1;
    background: #fff;
    .title {
      padding-left: 14px;
      height: 26px;
      line-height: 26px;
      border-left: 2px solid #d9dde1;
      font-size: 12px;
      color: rgb(147, 153, 159);
      background: #f3f5f7;
    }
    .food-item {
      display: flex;
      margin: 18px;
      padding-bottom: 18px;
      @include border-bottom(rgba(7,17,27,0.1));
      &:last-child {
        @include border-none;
        margin-bottom: 0;
      }
      .icon {
        flex: 0 0 57px;
        margin-right: 10px;
      }
      .content {
        flex: 1;
        .name {
          margin: 2px 0 8px 0;
          height: 14px;
          line-height: 14px;
          color: rgb(7, 17, 27);
        }
        .desc, .extra {
          line-height: 10px;
          font-size: 10px;
          color: rgb(147, 153, 159);
        }
        .desc {
          margin-bottom: 8px;
          line-height: 12px;
        }
        .extra {
          .count {
            margin-right: 12px;
          }
        }
        .price {
          font-weight: 700;
          line-height: 24px;
          .now {
            margin-right: 8px;
            font-size: 14px;
            color: rgb(240, 20, 20);
          }
          .old {
            text-decoration: line-through;
            font-size: 10px;
            color: rgb(147, 153, 159);
          }
        }
        .cart-wrapper{
          position:absolute;
          right: 0;
          bottom:12px;
        }
      }
    }
  }
}
</style>
