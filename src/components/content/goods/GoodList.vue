<template>
  <div class="goods">
<!--    v-if="currenIndex-->
    <goods-item v-for="item in goods" :goods-item="item"></goods-item>
  </div>
</template>

<script>
  import GoodsItem from "./GoodsItem";
    export default {
        name: "GoodList",
        data(){
            return{
              currentIndex:1
            }
        },
        props:{
          goods:{
            type:Array,
            default(){
              return []
            }
          }
      },
      components:{
          GoodsItem
      },
      methods:{
          test(index){
            console.log(index)
          }
      }
    }
</script>

<style scoped>
.goods{
  margin-bottom: 49px;
}
</style>
