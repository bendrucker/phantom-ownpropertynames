'use strict'

var isBroken = require('./detect')
var shim = require('./')

if (isBroken) {
  Object.defineProperty(Object, 'getOwnPropertyNames', {
    value: shim,
    configurable: true,
    writable: true
  })
}
