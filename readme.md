# is-rtp

[![Build Status](https://travis-ci.org/reklatsmasters/is-rtp.svg?branch=master)](https://travis-ci.org/reklatsmasters/is-rtp)
[![npm](https://img.shields.io/npm/v/is-rtp.svg)](https://npmjs.org/package/is-rtp)
[![node](https://img.shields.io/node/v/is-rtp.svg)](https://npmjs.org/package/is-rtp)
[![license](https://img.shields.io/npm/l/is-rtp.svg)](https://npmjs.org/package/is-rtp)
[![downloads](https://img.shields.io/npm/dm/is-rtp.svg)](https://npmjs.org/package/is-rtp)

Check if a Buffer is a [RTP/RTCP](https://tools.ietf.org/html/rfc3550) message. Used for demultiplex packets that are arriving on the same port. Follows [RFC7983](https://tools.ietf.org/html/rfc7983#section-7).

## Usage

```js
const dgram = require('dgram')
const is_rtp = require('is-rtp')

const socket = dgram.createSocket('udp4')

socket.on('message', (packet) => {
  if (is_rtp(packet)) {
    // handle RTP...
  }
})

socket.bind(0)
```

## Related projects

* [`is-dtls`](https://github.com/reklatsmasters/is-dtls) - Check if a Buffer is a [DTLS](https://tools.ietf.org/html/rfc4347) message.
* [`is-turn`](https://github.com/reklatsmasters/is-turn) - Check if a Buffer is a [TURN](https://tools.ietf.org/html/rfc5766) message.
* [`is-stun`](https://github.com/reklatsmasters/is-stun) - Check if a Buffer is a [STUN](https://tools.ietf.org/html/rfc5389) message.

## License

MIT, 2017 (c) Dmitry Tsvettsikh
