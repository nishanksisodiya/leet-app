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
        // eslint-disable-next-line no-template-curly-in-string
        artifactName: 'leet-setup.${ext}',
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
