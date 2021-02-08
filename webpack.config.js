const path = require('path');
const config = {
  entry: {
    vendor: ['@babel/polyfill', 'react', 'react-dom', 'axios'],
    test: ['./src/components/v1/index.js'],
    firstpage: ['./src/components/v2/FirstPage/hydrate.js'],
    // secondpage: ['./src/components/v2/SecondPage/hydrate.js'],
    firstpage3: ['./src/components/v3/FirstPage/hydrate.js'],
    secondpage3: ['./src/components/v3/SecondPage/hydrate.js'],
    subscriptionbus: ['./src/components/v3/SubscriptionBus/hydrate.js'],
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.wasm', '.mjs', '*'],
  },
  optimization: {
    splitChunks: {
      // include all types of chunks
      name: false,
    },
  },
};

module.exports = config;
