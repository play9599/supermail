<template>
  <div class="slide">
    <slot></slot>
<!--    <a :href="item.link">
          <img :src="item.image" alt="">
        </a>-->
  </div>
</template>

<script>
  export default {
    name: "Slide"
  }
</script>

<style scoped>
  .slide {
    width: 100vw;
    flex-shrink: 0;
  }
  .slide img {
    width: 100vw;
    height: 100%;
    box-sizing: border-box;
  }
</style>
