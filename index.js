'use strict'

const numberInRange = byte => byte >= 128 && byte <= 191

module.exports = isRtp

function isRtp(packet) {
  if (Buffer.isBuffer(packet) && packet.length > 0) {
    return numberInRange(packet[0])
  }

  return false
}
