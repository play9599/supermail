<template>
  <swiper>
    <swiper-item v-for="item in banners">
      <a :href="item">
        <img :src="item" alt="" @load="swiperImageLoad">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
  import {Swiper,SwiperItem} from "../../../components/common/swiper/index"
    export default {
        name: "SwiperViews",
      components:{
          SwiperItem,
        Swiper
      },
      props:{
          banners:{
            type:Array,
            default() {
              return [];
            }
          }
        },
      data(){
          return{
            isLoading:true
          }
      },
      methods:{
        swiperImageLoad(){
          if (this.isLoading){
            this.$emit("swiperImageLoad")
            this.isLoading = false
          }
        }
      }
    }
</script>

<style scoped>

</style>
