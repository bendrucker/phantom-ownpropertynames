'use strict'

var test = require('tape')
require('./implement')

test(function (t) {
  t.ok(~Object.getOwnPropertyNames(fn).indexOf('arguments'), 'normal behavior')
  t.notOk(~Object.getOwnPropertyNames(fn).indexOf('callee'), 'no callee')
  t.ok(~Object.getOwnPropertyNames({callee: true}).indexOf('callee'), 'own callee')
  t.end()
})

function fn () {}
