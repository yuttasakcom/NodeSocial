const path = require('path')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.js')

function resolve(dir) {
  return path.resolve(__dirname, '..', dir)
}

const config = {
  entry: resolve('client/client.js'),
  output: {
    filename: 'bundle.js',
    path: resolve('public')
  }
}

module.exports = merge(baseConfig, config)