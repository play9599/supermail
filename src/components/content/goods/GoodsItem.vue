<template>
  <div class="item" >
    <img :src="goodsItem.img_url" alt="" @load="imageLoad">
    <div>
      <p class="name">{{goodsItem.name}}</p>
      <p>
        <span class="price">{{goodsItem.price|price_print}}</span>
        <span class="star">☆{{goodsItem.star}}</span>
      </p>
    </div>
  </div>
</template>

<script>
    export default {
        name: "GoodsItem",
        props:{
          goodsItem:{
            type:Object,
            default(){
              return {}
            }
          }
        },
      filters:{
        price_print:function (value) {
            return value +"$";
        }
      },
      methods:{
        imageLoad(){
          this.$bus.$emit("imageLoad")
        }
      }
    }
</script>

<style scoped>
.item{
  display: inline-block;
  width: 50vw;
  box-sizing: border-box;
  text-align: center;
}
.item>img{
  width: 100%;
  height: 80%;
}
.star{
  margin-left: 20px;

}
/*关于文字处理*/
/*.name{*/
/*  overflow: hidden;*/
/*  text-overflow: ellipsis;*/
/*  white-space: nowrap;*/
/*  */
/*}*/
.price{
  color: #ff5777;
}
</style>
