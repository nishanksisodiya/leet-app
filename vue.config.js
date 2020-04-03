module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  transpileDependencies: [
    'vuetify'
  ],
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        appId: 'leet.id',
        mac: {
          category: 'leet.category'
        },
        protocols: {
          name: 'leet-protocol',
          schemes: [
            'leet'
          ]
        }
      }
    }
  }
}
