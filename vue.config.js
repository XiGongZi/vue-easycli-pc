module.exports = {
    publicPath: './', // 基本路径
    outputDir: 'dist', // 输出文件目录
    lintOnSave: false,
    devServer: {
      port: 8090, // 端口
    },
    // configureWebpack: {
    //     resolve: {
    //         alias: {
    //         //   '@': resolve('static') // 这里采用两个@符号来代替路径的别名，因为一个@符号已经默认被设置src的路径了，为了不影响原有的功能，这里采用两个@字符
    //         }
    //     }
    // }
  // lintOnSave: false // 取消 eslint 验证
};
