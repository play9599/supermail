module.exports = {
    configureWebpack:{
        resolve:{
            alias:{
                //起别名
                "assets":"@/assets",
                "common":"@/common",
                "components":"@/components",
                "network":"@/network",
                "views":"@/views",
            }
        },
    },
  devServer: {
    open:false,
    proxy:{
      "/api":{
        target:"http://localhost:8081/api",
        ws:true,
        changeOrigin: true,
        pathRewrite: {
          "^/api":""
        }
      }
    }
  },
    publicPath: '',
    outputDir: undefined,
    assetsDir: undefined,
    runtimeCompiler: undefined,
    productionSourceMap: undefined,
    parallel: undefined,
    css: undefined
}
