const path = require('path')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.js')
const webpackNodeExternals = require('webpack-node-externals')

function resolve(dir) {
  return path.resolve(__dirname, '..', dir)
}

const config = {
  target: 'node',
  entry: resolve('server/server.js'),
  output: {
    filename: 'bundle.js',
    path: resolve('build')
  },

  externals: [webpackNodeExternals()]
}

module.exports = merge(baseConfig, config)