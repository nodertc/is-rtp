'use strict'

const test = require('tape')
const isRtp = require('./')

test('should work', t => {
  t.false(isRtp(Buffer.from([127, 0x1, 0x2])))
  t.true(isRtp(Buffer.from([128, 0x1, 0x2])))
  t.true(isRtp(Buffer.from([130, 0x1, 0x2])))
  t.true(isRtp(Buffer.from([190, 0x1, 0x2])))
  t.true(isRtp(Buffer.from([191, 0x1, 0x2])))
  t.false(isRtp(Buffer.from([192, 0x1, 0x2])))

  t.end()
})

test('should throws', t => {
  t.false(isRtp(1))
  t.false(isRtp(NaN))
  t.false(isRtp(null))
  t.false(isRtp(undefined))
  t.false(isRtp({}))
  t.false(isRtp(''))
  t.false(isRtp(Buffer.alloc(0)))

  t.end()
})
