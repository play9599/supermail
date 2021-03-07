<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template v-slot:center>
        <div>购物街</div>
      </template>
    </nav-bar>
    <tab-control
      :titles="['流行','新款','精选']"
      @tabClick="tab_click"
      ref="tabControl" v-show="isHidden"></tab-control>
    <scroll class="content" ref="scroll" :probe-type="3" @scroll="scroll" :pull-up-load="true" @pullingUp="loadMore">
      <swiper-views :banners="banners" @swiperImageLoad="swiperImageLoad"></swiper-views>
      <recommnd :recommends="recommends"></recommnd>
      <feature-view></feature-view>
      <tab-control
        :titles="['流行','新款','精选']"
        @tabClick="tab_click"
        ref="tabControl"></tab-control>
      <good-list :goods="goods[currenType].list"/>
    </scroll>
    <back-top @click.native="backTop" v-show="show"></back-top>
  </div>
</template>

<script>
  //复用组件
  import NavBar from "../../components/common/navbar/NavBar";
  import TabControl from "../../components/content/tabcontrol/TabControl";
  import GoodList from "../../components/content/goods/GoodList";
  import scroll from "../../components/common/scroll/scroll";
  import BackTop from "../../components/content/BackTop/BackTop";
  //子组件
  import SwiperViews from "./chilren/SwiperViews";
  import Recommnd from "./chilren/Recommnd";
  import FeatureView from "./chilren/FeatureView";
  //网络请求
  import {getData, getHomeMultiData,getData_list} from "../../network/home";
  //工具方法
  import {debounce} from "../../common/utils";
  export default {
        name: "home",
        components:{
          NavBar,
          Recommnd,
          SwiperViews,
          FeatureView,
          TabControl,
          GoodList,
          scroll,
          BackTop
      },
    data(){return{
      banners:null,
      recommends:null,
      goods:{
        "pops":{page:0,list:[]},
        "news":{page:0,list:[]},
        "sell":{page:0,list:[]}
      },
      currenType:"pops",
      //判斷回頂按鈕是否显示
      show:false,
      //tabControl組件的offsetTop
      tabControlTop:0,
      // 关于那个实现
      isHidden:false
    }},
      created() {
         // 数据请求
        getHomeMultiData().then(res=>{
          this.banners  = res.img_url;
          this.recommends  = res.list;
        })
        this.getHomeData("pops")
        this.getHomeData("news")
        this.getHomeData("sell")


      },
      mounted() {
        // setTimeout(()=>{
        //   console.log(this.$refs.tabControl.$el.offsetTop);
        // },5000)
        //插件滚动bug处理
        const  refresh = debounce(this.$refs.scroll.refresh,500)
        this.$bus.$on("imageLoad",()=>{
          refresh()
        })
      },
    methods:{
      swiperImageLoad(){
        this.tabControlTop = this.$refs.tabControl.$el.offsetTop;
      },
        //  网络请求
        getHomeData(type){
          let page = this.goods[type].page +1
          getData(type,page).then(res=>{
            // console.log(res)
            this.goods[type].list.push(...res)
            if (this.goods[type].page<3){
              this.goods[type].page = page
              // console.log("正常操作")
            }
          })
        },
        //tab_control的切换
        tab_click(index){
          switch (index) {
            case 0: this.currenType = "pops";break;
            case 1: this.currenType = "news";break;
            case 2: this.currenType = "sell";break;
          }
        },
        //回到顶部 处理函数
        backTop(){
        this.$refs.scroll.scrollTo(0,0)
      },
      //判断回到顶部  按钮是否显示
      scroll(options){
        this.show = options.y<-1000;
        this.isHidden = options.y<-(this.tabControlTop)
      },
      //加载更多函数
      loadMore(){
        const page = this.goods[this.currenType].page
        this.getHomeData(this.currenType,page)
      }
    },
    computed(){
    //      解决点击下方导航   来回点击  会销毁实例   这样加大对服务器的阻力
    //      并且在切换之前 要记录x和y的位置    等在切换回来回到当前位置
    }
  }
</script>

<style scoped>
#home{
  height: 100vh;
}
.home-nav{
  background-color: var(--color-tint);
  color: white;
}
.tab_control{
  position:sticky;
  top: 44px;
  z-index: 2;
}
.content{
  height: calc(100% - 93px);
}
</style>
