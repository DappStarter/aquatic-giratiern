require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture merry flame trip normal note oval comic gesture person flock toss'; 
let testAccounts = [
"0x89df5a58f66490fdb99d75e606c1dd0dcb41009e50d99ae1f7dd8a28f2ce80ef",
"0x6d01f63ee1fe72a3e8f42371223596052394cac6768dc628f74d167be351b383",
"0x0760497e46bf9e44b3a5dc2d2b529cc0d4d5e3704f225313a874703a8d65feb3",
"0x82f2c63140b4b3c2783249f293ca9b0975121904f6c17c13cf73c499762c177e",
"0x806cf11b1937f6b79121f94aaae062deb2daec91ccfe3154a84fa8a87797c8af",
"0x482e84381534d10e7b93bd364cd15622c67bb4313d89319ee9e2debb80cca1bb",
"0xd17cd2dfa17348e314b1f5ff0622c53484d4da5d303f0355b77b27e772b9a287",
"0x70a261c7af3a6d990721ddfe9a23c0cf3bb8f7982113b5dcbb51dc61fa3c5146",
"0xa2795c33f06fbb141116249fabbbdf3699442098f6aeea4c5240d050d8959355",
"0x8edd45c808aba9b5c990eceef1bac9634b7f1b18ee9cf2c21246eaeb0f4eae2f"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                testAccounts,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
