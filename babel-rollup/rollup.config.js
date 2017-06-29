const babel = require('rollup-plugin-babel')
const commonjs = require('rollup-plugin-commonjs')
const resolve = require('rollup-plugin-node-resolve')

module.exports = {
  entry: 'index.js',
  dest: 'bundle.js',
  format: 'iife',
  plugins: [
    // https://github.com/rollup/rollup-plugin-node-resolve
    resolve({
      jsnext: true,
      browser: true,
    }),

    babel({
      exclude: 'node_modules/**',
    }),

    // https://github.com/rollup/rollup-plugin-commonjs
    commonjs({
      include: /.+/,
      // include: 'node_modules/**',
      // sourceMap: false,
    }),
    // commonjs(),
  ],
}
