const { resolve } = require('path')

module.exports = {
  router: {
    base: '/meusboletos/'
  },
  rootDir: resolve(__dirname, '..'),
  buildDir: resolve(__dirname, '.nuxt'),
  srcDir: __dirname,
  modules: [
    { handler: require('../') }
  ]
}
