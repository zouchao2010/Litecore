var Put = require('bufferput');
var buffertools = require('buffertools');
var hex = function(hex) {
  return new Buffer(hex, 'hex');
};

exports.livenet = {
  name: 'livenet',
  magic: hex('FBC0B6DB'),
  addressVersion: 0x30,
  privKeyVersion: 0xb0,
  P2SHVersion: 5,
  hkeyPublicVersion: 0x0488c42e,
  hkeyPrivateVersion: 0x0488e1f4,
  genesisBlock: {
    hash: hex('E2BF047E7E5A191AA4EF34D314979DC9986E0F19251EDABA5940FD1FE365A712'),
    merkle_root: hex('D9CED4ED1130F7B7FAAD9BE25323FFAFA33232A17C3EDF6CFD97BEE6BAFBDD97'),
    height: 0,
    nonce: 2084524493,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1317972665,
    bits: 504365040,
  },
  dnsSeeds: [
    'dnsseed.litecointools.com',
    'dnsseed.litecoinpool.org',
    'dnsseed.ltc.xurious.com',
    'dnsseed.koin-project.com',
    'dnsseed.weminemnc.com'
  ],
  defaultClientPort: 9333
};

exports.mainnet = exports.livenet;
exports.testnet = {
  name: 'testnet',
  magic: hex('FCC1B7DC'),
  addressVersion: 0x6f,
  privKeyVersion: 239,
  P2SHVersion: 196,
  hkeyPublicVersion: 0x0436f6e1,
  hkeyPrivateVersion: 0x0436ef7d,
  genesisBlock: {
    hash: hex('8ff688015e9008184e384ff2ffdff3dd9cd6ce6a718283c8acbe746ce271aef5'),
    merkle_root: hex('d9ced4ed1130f7b7faad9be25323ffafa33232a17c3edf6cfd97bee6bafbdd97'),
    height: 0,
    nonce: 385270584,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1317798646,
    bits: 504365040,
  },
  dnsSeeds: [
    'xx',
    'xx'
  ],
  defaultClientPort: 19333
};
