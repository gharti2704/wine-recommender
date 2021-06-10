var path = require('path');
var SRC_DIR = path.join(__dirname, 'client', 'src');
var PUBLIC_DIR = path.join(__dirname, 'client', 'public');

module.exports = {
  entry: `${SRC_DIR}/index.jsx`,
  devtool: 'inline-source-map',
  output: {
    filename: 'bundle.js',
    path: PUBLIC_DIR
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ]
  },
  mode: 'development',
  resolve: {
    extensions: ['.js', '.jsx']
  }

};
