const { resolve } = require('path');

module.exports = {
  router: {
    base: '/meusboletos/',
    head: {
      title: 'Meusboletos',
      meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Meusboletos'
      }
      ]
    }
  },
  rootDir: resolve(__dirname, '..'),
  buildDir: resolve(__dirname, '.nuxt'),
  srcDir: __dirname,
  modules: [
    { handler: require('../') }
  ]
}
