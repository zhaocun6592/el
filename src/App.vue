<template>
  <div id="app">
    <my-header :seller="seller"></my-header>
    <div class="content ">
      <div>
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="border-left">
        <router-link to="/ratings">评论</router-link>
      </div>
      <div>
        <router-link to="/seller">商家</router-link>
      </div>
    </div>

    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <div class="main border-left">
      我是main
    </div>
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
  /* @include  border-bottom(blue);
   @include  border-top(red); */
  > div {
    flex: 1;
    text-align: center;
    box-sizing: border-box;

  }
  &nth-of-type(1){
  @include border-left(red);
  }
}
.main{
  width: 100px;
  margin-left: 50px;
  height: 100px;
   @include border-left(red);
}
.router-link-active {
  color: rgb(17, 185, 101);
}
</style>
