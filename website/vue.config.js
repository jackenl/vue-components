const VueAutoRoutingPlugin = require('vue-auto-routing/lib/webpack-plugin');

module.exports = {
  lintOnSave: false,
  configureWebpack: {
    plugins: [
      new VueAutoRoutingPlugin({
        pages: 'src/pages',
        importPrefix: '@/pages/'
      })
    ]
  }
};
