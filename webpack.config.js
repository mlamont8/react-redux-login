import path from 'path';

export default {

  entry: path.join(__dirname, '/client/index.js'),
  output: {
    path: '/',
    filename: "bundle.js"
  },
  devtool: 'eval-source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        include:
        [path.join(__dirname, 'client'),
        path.join(__dirname, 'server/shared')
      ],
        loaders: [ 'babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.js' ]
  }
}
