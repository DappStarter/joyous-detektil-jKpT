require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'heavy knock forward turtle crazy rate noise million hidden person force gather'; 
let testAccounts = [
"0x0d92aa0c13f0eef2ba0c253d91015a856463fd894d5788f37bd16029367ae8b6",
"0x85998217fdcdc4c7be7010cb99531fd0cc2bbc05f7a25931dd568fe4003256f8",
"0x1b7cf7d03cfe852867dbf5d32b59e921a657b5b9ef2ad0f77d08f1c6cf73bbb5",
"0xeba6627f584b6cc36954c6307e7bfd3a56bd41ffaabe0b5d925a814423664acf",
"0x98f93b4c642c84f267db10e894296ecd40b236d3849f1dc122cf64558c830718",
"0x5b2b03b3cc99ca716f7a98cb7216481ad3f7f68b916fe60ebe9a3afd02aea718",
"0xc6aa8e3948d658cac96f8b1bc3d8ccffc14fe781023274a5f3138428384b6f97",
"0xe8e59cdde024a77a9000a17b859ac43c0d959dbb608d17932a166b886a7512e7",
"0x036675bc50dd73616641c222cbcfab29055243c503803cc2a08b5a71b4aa48a5",
"0x2a32157d461d8ffe2fc433108b720fe90e37f6818bd81ff3aa3a4b2f3e88bd7f"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


