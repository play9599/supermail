<template>
  <div class="tab-bar-item" @click="btn">
    <div v-if="!isActive"><slot name="item-icon" ></slot></div>
    <div  v-else><slot name="item-icon-active"></slot></div>
    <div :class="{active:isActive}"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    props:{
      path: String
    },
    data(){
      return{
      }
    },
    methods:{
      btn(){
        // console.log("hello")this.isActive  = !this.isActive
        if (this.$route.path !== this.path){
          this.$router.replace(this.path)
        }
      }
    },
    computed:{
      isActive(){
        return this.$route.path.indexOf(this.path) !==-1
      }
    }
  }
</script>

<style scoped>
  .tab-bar-item{
    flex: 1;
    text-align: center;
    height: 49px;
    cursor: pointer;
  }
  .tab-bar-item img{
    width: 24px;
    height: 24px;
  }
  .active{
    color: red;
  }
</style>
