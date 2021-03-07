<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
    import BScroll from "better-scroll"
    export default {
        name: "scroll",
        props:{
          probeType: {
            type:Number,
            default:3
          },
          pullUpLoad:{
            type: Boolean,
            default: false
          }
        },
        data(){
          return{
            scroll:null,
            show:false
          }
        },
        mounted() {
          this.scroll = new BScroll(document.querySelector(".wrapper"),{
            pullUpLoad:this.pullUpLoad,
            click:true,
            probeType:this.probeType
          })
          this.scroll.on("scroll",(options)=>{
            this.$emit("scroll",options)
          })
          // console.log(this.scroll)
          this.scroll.on("pullingUp",()=>{
            this.$emit("pullingUp")
            setInterval(()=>{
              this.scroll.finishPullUp()
            },1000)
          })
        },
        methods:{
          //  scrollTo(x.y,time)  x,y分别是位置,time是动画时间
          scrollTo(x,y,time=1000){
            this.scroll.scrollTo(x,y,time)
          },
          refresh(){
            // console.log("------")
            this.scroll.refresh()
          }
      }
    }
</script>

<style scoped>

</style>
