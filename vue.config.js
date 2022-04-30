module.exports = {
    publicPath: '/MyPortafolio/',

    pwa: {
      name: 'Henry Santamaria C',
      themeColor: '#1C2135',
      msTileColor: '#1C2135',
      manifestOptions: {
        background_color: '#1C2135'
      }
    },

    chainWebpack: config => {
      config
          .plugin('html')
          .tap(args => {
              args[0].title = 'Henry Santamaria C';
              return args;
          })
  }
}