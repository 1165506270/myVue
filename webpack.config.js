const path = require('path');
module.exports = {
    mode: 'development',
    entry: './src/core/instance/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'myVue.js'
      }
}