<template>
  <div class="tab_control">
    <div v-for="(item,index) in titles" class="tab_item" @click="nav_click(index)" :class="{active:currentIndex === index}">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
    export default {
        name: "TabControl",
        props:{
          titles:{
            type:Array,
            default(){
              return []
            }
          }
        },
      data(){
          return{
            currentIndex:0
          }
      },
      methods:{
          nav_click(index){
           this.currentIndex = index
           this.$emit("tabClick",index)
          }
      }
    }
</script>

<style scoped>
.tab_control{
  display: flex;
  text-align: center;
  background-color: white;
}
.tab_item{
  flex: 1;
  height: 44px;
  line-height: 44px;
}
.active{
  color: var(--color-high-text);

}
.active>span{
  border-bottom: 1px solid var(--color-high-text);
  padding: 5px;
}
.fixed{
  position: fixed;
  top: 44px;
}
</style>
