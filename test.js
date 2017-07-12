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
  const err = /Argument 1 should be a Buffer./

  t.throws(() => isRtp(1), err)
  t.throws(() => isRtp(NaN), err)
  t.throws(() => isRtp(null), err)
  t.throws(() => isRtp(undefined), err)
  t.throws(() => isRtp({}), err)
  t.throws(() => isRtp(''), err)
  t.throws(() => isRtp(Buffer.alloc(0)), err)

  t.end()
})
