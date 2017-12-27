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
@import "../../assets/stylus/mixin";
.header {
  overflow: hidden;
  background: rgba(7, 17, 27, 0.5);
  color: #fff;
  .content-wrapper {
    padding: 24px 12px 18px 24px;
    font-size: 0;
    .avatar {
      display: inline-block;
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
        font-size: 14px;
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
        font-size: 16px;
      }
    }
  }
}
</style>
