<template>
  <div id="app">
    <my-header :seller="seller"></my-header>
    <div class="content border-bottom">
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
    <div class="main border-all">
     我是移动端1px
    </div>
     <div class="main1">
       我是border1px
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
  @include border-bottom(rgba(7, 17, 27, 0.1));
  > div {
    flex: 1;
    text-align: center;
    box-sizing: border-box;

  }

}
.main{
  margin-left: 50px;
  width: 100px;
  height: 100px;
   @include border-all(red);
}
.main1{
  margin-left: 50px;
  margin-top: 10px;
  width: 100px;
  height: 100px;
  border:1px solid red;
}
.router-link-active {
  color: rgb(17, 185, 101);
}
</style>
