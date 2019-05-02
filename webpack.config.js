module.exports = {
  mode: process.env.NODE_ENV || "development",
  entry: './app/app.js',
  output: {
    path: __dirname + '/app',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          babelrc: false,
          presets: [
            '@babel/preset-env'
          ],
          plugins: [
            [
              '@babel/plugin-proposal-class-properties',
              {
                loose: true
              }
            ]
          ]
        }
      }
    ]
  },
  resolve: {
    alias: {
      'vue': 'vue/dist/vue',
    }
  }
};
