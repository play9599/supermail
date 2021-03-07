<template>
  <tab-bar>
    <tab-item path="/home">
      <template v-slot:item-icon>
        <img src="~/assets/image/home.svg" alt="">
      </template>
      <template v-slot:item-icon-active>
        <img src="~/assets/image/home_active.svg" alt="">
      </template>
      <template v-slot:item-text>
        <div>首页</div>
      </template>
    </tab-item>
    <tab-item path="/lei">
      <template v-slot:item-icon>
        <img src="~/assets/image/lei.svg" alt="">
      </template>
      <template v-slot:item-icon-active>
        <img src="~/assets/image/lei_active.svg" alt="">
      </template>
      <template v-slot:item-text>
        <div>分类</div>
      </template>
    </tab-item>
    <tab-item path="/car">
      <template v-slot:item-icon>
        <img src="~/assets/image/car.svg" alt="">
      </template>
      <template v-slot:item-icon-active>
        <img src="~/assets/image/car_active.svg" alt="">
      </template>
      <template v-slot:item-text>
        <div>购物车</div>
      </template>
    </tab-item>
    <tab-item path="/me">
      <template v-slot:item-icon>
        <img src="~/assets/image/me.svg" alt="">
      </template>
      <template v-slot:item-icon-active>
        <img src="~/assets/image/me_active.svg" alt="">
      </template>
      <template v-slot:item-text>
        <div>我的</div>
      </template>
    </tab-item>
  </tab-bar>
</template>

<script>
  import TabItem from "../../common/tabbar/TabItem";
  import TabBar from "../../common/tabbar/TabBar";
  export default {
    name: "MainTarBar",
    components: {
      TabBar,
      TabItem
    }
  }
</script>

<style scoped>
</style>
