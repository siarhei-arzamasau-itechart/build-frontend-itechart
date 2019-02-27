const path = require('path');

module.exports = {
  mode: 'development',
  entry: { bundle: './src/index.js', admin: './src/admin.js' },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
};






// entry: './src/index.js',