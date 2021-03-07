<template>
  <div class="nav">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
    export default {
        name: "NavBar"
    }
</script>

<style scoped>
  .nav{
    display: flex;
    width: 100vw;
    height: 44px;
    text-align: center;
    line-height: 44px;
    box-shadow: 0 1px 1px rgba(100,100,100,.1);
    position: fixed;
    top: 0;
    z-index: 9999;
  }
  .left,.right{
    width: 60px;
  }
  .center{
    flex: 1;
  }
</style>
