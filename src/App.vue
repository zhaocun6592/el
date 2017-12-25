<template>
  <div id="app">
    <my-header :seller="seller"></my-header>
    <div class="content">
      <div><router-link to="/goods">商品</router-link> </div>
      <div><router-link to="/ratings">评论</router-link> </div>
      <div><router-link to="/seller">商家</router-link> </div>
    </div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import MyHeader from "./components/header/header";
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
      if (response.errno === 0) {
        this.seller = response.data;
      }
    });
  }
};
</script>

<style scoped lang="scss">
$color: #ccc;
.content {
  height: 40px;
  line-height: 40px;
  display: flex;
  background: $color;
  > div {
    flex: 1;
    text-align: center;
  }
}

.router-link-active {
  color: rgb(17, 185, 101);
}
</style>
