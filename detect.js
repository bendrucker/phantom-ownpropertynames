'use strict'

var isDefined = require('./defined')

module.exports = (function isOwnPropertyNamesBroken (fn) {
  return !isDefined || ~Object.getOwnPropertyNames(fn).indexOf('callee')
})(fn)

function fn () {}
