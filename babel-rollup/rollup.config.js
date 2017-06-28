const resolve = require('rollup-plugin-node-resolve')
const babel = require('rollup-plugin-babel')

module.exports = {
  entry: 'index.js',
  format: 'iife',
  plugins: [
    resolve(),
    babel({
    })
  ],
  dest: 'bundle.js'
}
