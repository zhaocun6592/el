<template>
  <div class="header">
    <div class="content-wrapper ">
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
        <div v-if="seller.supports!=null" class="support">
          <span class="icon" :class="classMap[seller.supports[0].type]"></span>
          <span class="text">{{seller.supports[0].description}}</span>
        </div>
      </div>
      <div class="support-count" @click="showDetail">
        <span class="count">{{seller.supports.length}}个</span>
        <i class="icon-keyboard_arrow_right"></i>
      </div>

    </div>
    <div class="bulletin-wrapper" @click="showDetail">
      <span class="bulletin-title"></span>
      <span class="bulletin-text">{{seller.bulletin}}</span>
      <i class="icon-keyboard_arrow_right"></i>
    </div>
    <div class="background">
      <img :src="seller.avatar" width="100%" height="100%" />
    </div>
    <transition name="fade">
      <div class="detail" v-show="detailShow">
        <div class="detail-wrapper clearfix">
          <div class="detail-main">
            <h1 class="name">{{seller.name}}</h1>
            <div class="store-title">
              <div class="line"></div>
              <div class="text">优惠信息</div>
              <div class="line"></div>
            </div>
            <ul v-if="seller.supports" class="supports">
              <li class="support-item" v-for="(item,index) in seller.supports">
                <span class="icon" :class="classMap[seller.supports[index].type]"></span>
                <span class="text">{{seller.supports[index].description}}</span>
              </li>
            </ul>
            <div class="store-title">
              <div class="line"></div>
              <div class="text">商家公告</div>
              <div class="line"></div>
            </div>
            <div class="bulletin">
              <div class="content">{{seller.bulletin}}</div>
            </div>

          </div>
        </div>
        <div class="detail-close">
          <i class="icon-close" @click="hideDetail"></i>
        </div>
      </div>
    </transition>
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
    return {
      detailShow: false,
      classMap: []
    };
  },
  methods: {
    showDetail() {
      this.detailShow = true;
    },
    hideDetail() {
      this.detailShow = false;
    }
  },
  created() {
    this.classMap = ["decrease", "discount", "special", "invoice", "guarantee"];
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../../assets/stylus/mixin";
.header {
  overflow: hidden;
  position: relative;
  background: rgba(7, 17, 27, 0.5);
  color: #fff;
  .content-wrapper {
    position: relative;
    padding: 24px 12px 18px 24px;
    font-size: 0;
    .avatar {
      display: inline-block;
      vertical-align: top;
      > img {
        width: 64px;
        height: 64px;
        border-radius: 2px;
      }
    }
    .content {
      display: inline-block;
      margin-left: 16px;
      .title {
        margin: 2px 0 8px 0;
        .brand {
          display: inline-block;
          vertical-align: top;
          width: 30px;
          height: 18px;
          @include bg-image(brand);
          background-size: 30px 18px;
        }
        .name {
          margin-left: 6px;
          font-size: 16px;
          line-height: 18px;
          font-weight: bold;
        }
      }
      .description {
        margin-bottom: 10px;
        line-height: 12px;
        font-size: 12px;
      }
      .support {
        .icon {
          display: inline-block;
          vertical-align: top;
          width: 12px;
          height: 12px;
          margin-right: 4px;
          background-size: 12px 12px;
          &.decrease {
            @include bg-image("decrease_1");
          }
          &.discount {
            @include bg-image ("discount_1");
          }
          &.guarantee {
            @include bg-image("guarantee_1");
          }
          &.invoice {
            @include bg-image("invoice_1");
          }
          &.special {
            @include bg-image("special_1");
          }
        }
        .text {
          font-size: 12px;
          font-size: 12px;
        }
      }
    }
    .support-count {
      position: absolute;
      right: 12px;
      bottom: 18px;
      padding: 0 8px;
      height: 24px;
      line-height: 24px;
      border-radius: 14px;
      background: rgba(0, 0, 0, 0.2);
      text-align: center;
      .count {
        margin-left: 3px;
        vertical-align: top;
        font-size: 10px;
      }
      .icon-keyboard_arrow_right {
        margin-left: 1px;
        vertical-align: bottom;
        line-height: 25px;
        font-size: 10px;
      }
    }
  }
  .bulletin-wrapper {
    position: relative;
    height: 28px;
    line-height: 28px;
    padding: 0 22px 0 12px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    background: rgba(7, 17, 27, 0.2);
    font-size: 14px;
    .bulletin-title {
      display: inline-block;
      width: 22px;
      height: 12px;
      margin-top: 8px;
      @include bg-image("bulletin");
      background-size: 22px 12px;
      background-repeat: no-repeat;
    }
    .bulletin-text {
      vertical-align: top;
      margin: 0 4px;
      font-size: 10px;
    }
    .icon-keyboard_arrow_right {
      position: absolute;
      right: 12px;
      top: 9px;
      font-size: 10px;
    }
  }
  .background {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    filter: blur(10px);
  }
  .detail {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    /*  backdrop-filter: blur(10px); */
    z-index: 100;
    background: rgba(7, 17, 27, 0.8);
    &.fade-enter-active,
    &.fade-leave-active {
      transition: all 0.5s;
    }

    &.fade-enter,
    &.fade-leave-active {
      opacity: 0;
      background: rgba(7, 17, 27, 0);
    }

    .detail-wrapper {
      width: 100%;
      min-height: 100%;
      .detail-main {
        padding-bottom: 64px;
        overflow: hidden;
        .name {
          margin-top: 64px;
          text-align: center;
          font-weight: 700;
          line-height: 32px;
        }
        .store-title {
          display: flex;
          width: 80%;
          margin: 28px auto;
          text-align: center;
          .line {
            flex: 1;
            position: relative;
            top: -6px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.2);
          }
          .text {
            padding: 0 12px;
            font-size: 14px;
            font-weight: 700;
          }
        }
        .supports {
          width: 80%;
          margin: 0 auto;
          .support-item {
            padding: 0 12px;
            margin-bottom: 12px;
            font-size: 0;
            &:last-child {
              margin-bottom: 0;
            }
            .icon {
              display: inline-block;
              width: 16px;
              height: 16px;
              vertical-align: top;
              margin-right: 6px;
              background-size: 16px 16px;
              background-repeat: no-repeat;
              &.decrease {
                @include bg-image("decrease_2");
              }
              &.discount {
                @include bg-image("discount_2");
              }
              &.guarantee {
                @include bg-image("guarantee_2");
              }
              &.invoice {
                @include bg-image("invoice_2");
              }
              &.special {
                @include bg-image("special_2");
              }
            }
            .text {
              line-height: 16px;
              font-size: 14px;
            }
          }
        }
        .bulletin {
          width: 80%;
          margin: 0 auto;
          .content {
            padding: 0 12px;
            line-height: 24px;
            font-size: 14px;
          }
        }
      }
    }
    .detail-close {
      position: relative;
      width: 32px;
      height: 32px;
      margin: -64px auto 0 auto;
      text-align: center;
      font-size: 32px;
      clear: both;
    }
  }
}
</style>
