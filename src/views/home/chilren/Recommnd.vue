<template>
  <div class="recommond">
    <div v-for="item in recommends" class="recommond_item">
      <a :href="item.img_url">
        <img :src="item.img_url" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Recommnd",
      props:{
          recommends:{
            type:Array,
            default(){
              return []
            }
          }
      }
    }
</script>

<style scoped>
  .recommond{
    display: flex;
    text-align: center;
    font-size: 12px;
    padding: 10px 0 20px;
    border-bottom: 10px solid #eee;
  }
  .recommond_item img{
    width: 85%;
    height: 85%;
  }
</style>
