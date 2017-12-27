<template>
  <div id="app">
    <my-header :seller="seller"></my-header>
    <div class="content border-1px">
      <div>
        <router-link to="/goods">商品</router-link>
      </div>
      <div>
        <router-link to="/ratings">评论</router-link>
      </div>
      <div>
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import MyHeader from "./components/header/header";
const ERR_OK = 0;
export default {
  data() {
    return {
      seller: {}
    };
  },
  components: {
    MyHeader
  },
  created() {
    this.$http.get("/api/seller").then(response => {
      response = response.body;
      console.log(response);
      if (response.errno === ERR_OK) {
        this.seller = response.data;
      }
    });
  }
};
</script>

<style scoped lang="scss">
@import "./assets/stylus/mixin";
.content {
  height: 40px;
  line-height: 40px;
  display: flex;
  /* border-bottom: 1px solid #ccc; */
  @include  border-1px(#ccc);
  > div {
    flex: 1;
    text-align: center;
  }
}
.router-link-active {
  color: rgb(17, 185, 101);
}
</style>
