'use strict'

var hasOwnProperty = Object.hasOwnProperty
var originalGetOwnPropertyNames = Object.getOwnPropertyNames

module.exports = function getOwnPropertyNames (obj) {
  var result = originalGetOwnPropertyNames.call(this, obj)
  if (typeof obj !== 'function' || hasOwnProperty.call(obj, 'callee')) {
    return result
  }
  return result.filter(function filterCallee (name) {
    return name !== 'callee'
  })
}
