// Polyfill fn.bind() for PhantomJS
/* eslint-disable no-extend-native */
Function.prototype.bind = require('function-bind')

// require all test files (files that ends with .spec.js)
var testsContext = require.context('../../src', true, /\.spec$/)
testsContext.keys().forEach(testsContext)

// require all src files except main.js for coverage.
// you can also change this to match only the subset of files that
// you want coverage for.
// var srcContext = require.context('../../src/logic', true, /(?!spec)/)
var srcContext = require.context('../../src', true, /^(?!.*[.]spec\.js$).*$/)
srcContext.keys().forEach(srcContext)
