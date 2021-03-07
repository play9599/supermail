<template>
  <div id="app">
    <main-tar-bar></main-tar-bar>
    <router-view></router-view>
  </div>
</template>

<script>
  import MainTarBar from "./components/content/MainTarBar/MainTarBar";
  export default {
    name: 'app',
    components: {
     MainTarBar,
    }
  }
</script>

<style>
  @import "assets/css/base.css";
</style>
