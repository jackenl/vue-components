const { VueLoaderPlugin } = require('vue-loader');
const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  mode: 'production',
  entry: resolve('../packages/i-comps/index.js'),
  output: {
    path: resolve('../lib'),
    publicPath: '/',
    filename: 'index.js',
    libraryTarget: 'umd',
    library: 'IComps'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.less$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'less-loader'
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.json', '.less']
  },
  externals: [
    {
      vue: {
        toot: 'Vue',
        commonjs: 'vue',
        commonjs2: 'vue'
      }
    }
  ],
  plugins: [
    new VueLoaderPlugin()
  ]
};
