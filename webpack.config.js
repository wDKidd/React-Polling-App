module.exports = {
  entry: './app-client.js',
  output: {
    filename: 'public/js/bundle.js'
  },
  module: {
  loaders: [
    {
      exclude: /(node_modules|app-server.js)/,
      loader: 'babel'
    },
    {
      exclude: /(node_modules|app-server.js)/,
      loader: 'jsx'
    }
  ]
  }
};
