<template>
  <div class="good">
    <div class="menu-wrapper" ref="menuWrapper">
      <ul class="menu-ul">
        <li v-for="(item,index) in goods" class="menu-li">{{item.name}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
const ERR_OK = 0;
export default {
  data() {
    return {
      mess: "123",
      goods: {}
    };
  },
  created() {
    this.$http.get("/api/goods").then(response => {
      response = response.body;
      console.log(response);
      if (response.errno === ERR_OK) {
        this.goods = response.data;
        this.$nextTick(() => {
          this._initScroll();
        });
      }
    });
  },
  methods: {
    _initScroll() {
      this.menuScroll = new BScroll(this.$refs.menuWrapper, {
         click: true
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.good {
  display: flex;
  position: absolute;
  top: 174px;
  bottom: 46px;
  width: 100%;
  background: #ccc;
  overflow: hidden;
  .menu-ul {
    .menu-li {
      height:70px;
      line-height: 80px;
    }
  }
}
</style>
