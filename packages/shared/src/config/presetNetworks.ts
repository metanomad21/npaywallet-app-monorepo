import { FAKE_ALL_NETWORK } from './fakeAllNetwork';

import type { IServerNetwork } from '../../types';

const serverPresetNetworks = [
  {
    'balance2FeeDecimals': 9,
    'chainId': '9686',
    'code': '9purple',
    'decimals': 18,
    'extensions': {
      'defaultStableTokens': [
        '0xf02bd6d1563bb3e02955c06e078c4af4e2725659', //NPU
        '0x7F46dE9cDf6Fda86Ea633225a26F7521bDd1baeb', //9purple-USDT
      ],
      'position': 1,
    },
    'id': 'evm--9686',
    'impl': 'evm',
    'isTestnet': false,
    'logoURI': 'http://common-asset.9purple.co/images/NPC-icon-128.png',
    'name': '9Purple Chain',
    'rpcURLs': [
      {
        'url': 'https://rpc.9purple.co',
      }
    ],
    'shortcode': 'npc',
    'shortname': 'NPC',
    'symbol': 'NPC',
    'feeMeta': {
      'code': 'npc',
      'decimals': 9,
      'symbol': 'Gwei',
    },
    'defaultEnabled': true,
    'priceConfigs': [
      // {
      //   'channel': 'coingecko',
      //   'native': 'binancecoin',
      //   'platform': 'binance-smart-chain',
      // },
      // {
      //   'channel': 'yahoo',
      //   'native': 'NPC',
      // },
    ],
    'explorers': [
      {
        "address": "https://explorer.9purple.co/address/{address}",    
        "block": "https://explorer.9purple.co/block/{block}",      
        "name": "https://explorer.9purple.co/",          
        "transaction": "https://explorer.9purple.co/tx/{transaction}", 
      }
    ],
    'status': 'LISTED',
    'createdAt': '2023-05-31T00:29:24.951Z',
    'updatedAt': '2023-05-31T00:29:24.951Z',
  },
  {
    'balance2FeeDecimals': 0,
    'chainId': '0',
    'code': 'btc',
    'decimals': 8,
    'extensions': {
      'position': 2,
      'providerOptions': {
        'hardwareCoinName': 'btc',
      },
    },
    'id': 'btc--0',
    'impl': 'btc',
    'isTestnet': false,
    'logoURI': 'https://onekey-asset.com/assets/btc/btc.png',
    'name': 'Bitcoin111',
    'rpcURLs': [
      {
        'url': 'https://node.onekey.so/btc',
      },
      {
        'url': 'https://1rpc.io/btc',
      },
    ],
    'shortcode': 'btc',
    'shortname': 'BTC',
    'symbol': 'BTC',
    'feeMeta': {
      'code': 'btc',
      'decimals': 8,
      'symbol': 'BTC',
    },
    'defaultEnabled': true,
    'priceConfigs': [
      {
        'channel': 'coingecko',
        'native': 'bitcoin',
        'platform': 'ordinals',
      },
    ],
    'explorers': [
      {
        'address': 'https://mempool.space/address/{address}',
        'block': 'https://mempool.space/block/{block}',
        'name': 'https://mempool.space/',
        'transaction': 'https://mempool.space/tx/{transaction}',
      },
    ],
    'status': 'LISTED',
    'createdAt': '2023-05-31T00:29:24.951Z',
    'updatedAt': '2023-05-31T00:29:24.951Z',
  },
  {
    'balance2FeeDecimals': 9,
    'chainId': '1',
    'code': 'eth',
    'decimals': 18,
    'extensions': {
      'defaultStableTokens': [
        '0xdac17f958d2ee523a2206206994597c13d831ec7',
        '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
        '0x4fabb145d64652a948d72533023f6e7a623c7c53',
        '0x6b175474e89094c44da98b954eedeac495271d0f',
      ],
      'position': 3,
      'providerOptions': {
        'EIP1559Enabled': true,
        'preferMetamask': true,
      },
    },
    'id': 'evm--1',
    'impl': 'evm',
    'isTestnet': false,
    'logoURI': 'https://onekey-asset.com/assets/eth/eth.png',
    'name': 'Ethereum',
    'rpcURLs': [
      {
        'url': 'https://node.onekey.so/eth',
      },
      {
        'url': 'https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161',
      },
      {
        'url': 'https://cloudflare-eth.com',
      },
      {
        'url': 'https://rpc.ankr.com/eth',
      },
      {
        'url': 'https://rpc.flashbots.net',
      },
      {
        'url':
          'https://eth-mainnet.alchemyapi.io/v2/QKMdAyFAARxN-dEm_USOu8-u0klcBuTO',
      },
      {
        'url':
          'https://eth-mainnet.gateway.pokt.network/v1/lb/611156b4a585a20035148406',
      },
      {
        'url': 'https://api.mycryptoapi.com/eth',
      },
      {
        'url':
          'https://eth-mainnet.gateway.pokt.network/v1/5f3453978e354ab992c4da79',
      },
      {
        'url': 'https://eth.public-rpc.com',
      },
      {
        'url': 'https://main-light.eth.linkpool.io',
      },
      {
        'url': 'https://mainnet-eth.compound.finance',
      },
      {
        'url': 'https://eth626892d.jccdex.cn',
      },
      {
        'url': 'https://1rpc.io/eth',
      },
      {
        'url': 'https://onekey-eth.rpc.blxrbdn.com',
      },
    ],
    'shortcode': 'eth',
    'shortname': 'ETH',
    'symbol': 'ETH',
    'feeMeta': {
      'code': 'eth',
      'decimals': 9,
      'symbol': 'Gwei',
    },
    'defaultEnabled': true,
    'priceConfigs': [
      {
        'channel': 'coingecko',
        'native': 'ethereum',
        'platform': 'ethereum',
      },
      {
        'channel': 'yahoo',
        'native': 'ETH',
      },
    ],
    'explorers': [
      {
        'address': 'https://cn.etherscan.com/address/{address}',
        'block': 'https://cn.etherscan.com/block/{block}',
        'name': 'https://cn.etherscan.com/',
        'transaction': 'https://cn.etherscan.com/tx/{transaction}',
      },
      {
        'address': 'https://etherscan.io/address/{address}',
        'block': 'https://etherscan.io/block/{block}',
        'name': 'https://etherscan.io/',
        'transaction': 'https://etherscan.io/tx/{transaction}',
      },
      {
        'address': 'https://www.oklink.com/eth/address/{address}',
        'block': 'https://www.oklink.com/eth/block/{block}',
        'name': 'https://www.oklink.com/eth/',
        'transaction': 'https://www.oklink.com/eth/tx/{transaction}',
      },
    ],
    'status': 'LISTED',
    'createdAt': '2023-05-31T00:29:24.951Z',
    'updatedAt': '2023-05-31T00:29:24.951Z',
  },
  {
    'balance2FeeDecimals': 9,
    'chainId': '137',
    'code': 'polygon',
    'decimals': 18,
    'extensions': {
      'defaultStableTokens': [
        '0xc2132d05d31c914a87c6611c10748aeb04b58e8f',
        '0x2791bca1f2de4661ed88a30c99a7a9449aa84174',
        '0x9fb83c0635de2e815fd1c21b3a292277540c2e8d',
        '0x8f3cf7ad23cd3cadbd9735aff958023239c6a063',
      ],
      'position': 6,
      'providerOptions': {
        'EIP1559Enabled': true,
        'preferMetamask': true,
      },
    },
    'id': 'evm--137',
    'impl': 'evm',
    'isTestnet': false,
    'logoURI': 'https://onekey-asset.com/assets/polygon/polygon.png',
    'name': 'Polygon',
    'rpcURLs': [
      {
        'url': 'https://polygon-rpc.com',
      },
      {
        'url': 'https://rpc-mainnet.matic.network',
      },
      {
        'url': 'https://rpc-mainnet.maticvigil.com',
      },
      {
        'url': 'https://rpc-mainnet.matic.quiknode.pro',
      },
      {
        'url': 'https://matic-mainnet.chainstacklabs.com',
      },
      {
        'url': 'https://matic-mainnet-full-rpc.bwarelabs.com',
      },
      {
        'url': 'https://matic-mainnet-archive-rpc.bwarelabs.com',
      },
      {
        'url': 'https://node.onekey.so/polygon',
      },
      {
        'url': 'https://1rpc.io/matic',
      },
      {
        'url': 'https://onekey-polygon.rpc.blxrbdn.com',
      },
    ],
    'shortcode': 'polygon',
    'shortname': 'Polygon',
    'symbol': 'MATIC',
    'feeMeta': {
      'code': 'polygon',
      'decimals': 9,
      'symbol': 'Gwei',
    },
    'defaultEnabled': true,
    'priceConfigs': [
      {
        'channel': 'coingecko',
        'native': 'matic-network',
        'platform': 'polygon-pos',
      },
      {
        'channel': 'yahoo',
        'native': 'MATIC',
      },
    ],
    'explorers': [
      {
        'address': 'https://polygonscan.com/address/{address}',
        'block': 'https://polygonscan.com/block/{block}',
        'name': 'https://polygonscan.com/',
        'transaction': 'https://polygonscan.com/tx/{transaction}',
      },
    ],
    'status': 'LISTED',
    'createdAt': '2023-05-31T00:29:24.951Z',
    'updatedAt': '2023-05-31T00:29:24.951Z',
  },
  {
    'balance2FeeDecimals': 9,
    'chainId': '42161',
    'code': 'arbitrum',
    'decimals': 18,
    'extensions': {
      'defaultStableTokens': [
        '0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9',
        '0xff970a61a04b1ca14834a43f5de4533ebddb5cc8',
        '0xda10009cbd5d07dd0cecc66161fc93d7c9000da1',
      ],
      'position': 7,
    },
    'id': 'evm--42161',
    'impl': 'evm',
    'isTestnet': false,
    'logoURI': 'https://onekey-asset.com/assets/arbitrum/arbitrum.png',
    'name': 'Arbitrum',
    'rpcURLs': [
      {
        'url': 'https://arb1.arbitrum.io/rpc',
      },
      {
        'url': 'https://rpc.ankr.com/arbitrum',
      },
      {
        'url': 'https://node.onekey.so/arbitrum',
      },
      {
        'url': 'https://1rpc.io/arb',
      },
    ],
    'shortcode': 'arbitrum',
    'shortname': 'Arbitrum',
    'symbol': 'ETH',
    'feeMeta': {
      'code': 'arbitrum',
      'decimals': 9,
      'symbol': 'Gwei',
    },
    'defaultEnabled': true,
    'priceConfigs': [
      {
        'channel': 'coingecko',
        'native': 'ethereum',
        'platform': 'arbitrum-one',
      },
      {
        'channel': 'yahoo',
        'native': 'ETH',
      },
    ],
    'explorers': [
      {
        'address': 'https://arbiscan.io/address/{address}',
        'block': 'https://arbiscan.io/block/{block}',
        'name': 'https://arbiscan.io/',
        'transaction': 'https://arbiscan.io/tx/{transaction}',
      },
    ],
    'status': 'LISTED',
    'createdAt': '2023-05-31T00:29:24.951Z',
    'updatedAt': '2023-05-31T00:29:24.951Z',
  },
  {
    'balance2FeeDecimals': 9,
    'chainId': '56',
    'code': 'bsc',
    'decimals': 18,
    'extensions': {
      'defaultStableTokens': [
        '0x55d398326f99059ff775485246999027b3197955',
        '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d',
        '0xe9e7cea3dedca5984780bafc599bd69add087d56',
        '0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3',
      ],
      'position': 4,
    },
    'id': 'evm--56',
    'impl': 'evm',
    'isTestnet': false,
    'logoURI': 'https://onekey-asset.com/assets/bsc/bsc.png',
    'name': 'BNB Smart Chain',
    'rpcURLs': [
      {
        'url': 'https://bsc-dataseed1.ninicoin.io',
      },
      {
        'url': 'https://bsc-dataseed2.ninicoin.io',
      },
      {
        'url': 'https://bsc-dataseed3.ninicoin.io',
      },
      {
        'url': 'https://bsc-dataseed4.ninicoin.io',
      },
      {
        'url': 'https://bsc-dataseed.binance.org',
      },
      {
        'url': 'https://bsc-dataseed1.binance.org',
      },
      {
        'url': 'https://bsc-dataseed2.binance.org',
      },
      {
        'url': 'https://bsc-dataseed3.binance.org',
      },
      {
        'url': 'https://bsc-dataseed4.binance.org',
      },
      {
        'url': 'https://bsc-dataseed1.defibit.io',
      },
      {
        'url': 'https://bsc-dataseed2.defibit.io',
      },
      {
        'url': 'https://bsc-dataseed3.defibit.io',
      },
      {
        'url': 'https://bsc-dataseed4.defibit.io',
      },
      {
        'url': 'https://binance.ankr.com',
      },
      {
        'url': 'https://binance.nodereal.io',
      },
      {
        'url': 'https://rpc-bsc.bnb48.club/',
      },
      {
        'url': 'https://bscrpc.com',
      },
      {
        'url': 'https://node.onekey.so/bsc',
      },
      {
        'url': 'https://1rpc.io/bnb',
      },
      {
        'url': 'https://onekey-bnb.rpc.blxrbdn.com',
      },
    ],
    'shortcode': 'bsc',
    'shortname': 'BSC',
    'symbol': 'BNB',
    'feeMeta': {
      'code': 'bsc',
      'decimals': 9,
      'symbol': 'Gwei',
    },
    'defaultEnabled': true,
    'priceConfigs': [
      {
        'channel': 'coingecko',
        'native': 'binancecoin',
        'platform': 'binance-smart-chain',
      },
      {
        'channel': 'yahoo',
        'native': 'BNB',
      },
    ],
    'explorers': [
      {
        'address': 'https://bscscan.com/address/{address}',
        'block': 'https://bscscan.com/block/{block}',
        'name': 'https://bscscan.com/',
        'transaction': 'https://bscscan.com/tx/{transaction}',
      },
    ],
    'status': 'LISTED',
    'createdAt': '2023-05-31T00:29:24.951Z',
    'updatedAt': '2023-05-31T00:29:24.951Z',
  },
  {
    'balance2FeeDecimals': 0,
    'chainId': '0x2b6653dc',
    'clientApi': {
      'tronscan': 'https://apilist.tronscanapi.com',
    },
    'code': 'trx',
    'decimals': 6,
    'extensions': {
      'defaultStableTokens': [
        'TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t', //USDT
      ],
      'position': 5,
    },
    'id': 'tron--0x2b6653dc',
    'impl': 'tron',
    'isTestnet': false,
    'logoURI': 'https://onekey-asset.com/assets/trx/trx.png',
    'name': 'Tron',
    'rpcURLs': [
      {
        'url': 'https://tron-mainnet.token.im',
      },
      {
        'url': 'https://node.onekey.so/trx',
      },
    ],
    'shortcode': 'trx',
    'shortname': 'TRX',
    'symbol': 'TRX',
    'feeMeta': {
      'code': 'trx',
      'decimals': 6,
      'symbol': 'TRX',
    },
    'defaultEnabled': true,
    'priceConfigs': [
      {
        'channel': 'coingecko',
        'native': 'tron',
        'platform': 'tron',
      },
    ],
    'explorers': [
      {
        'address': 'https://tronscan.org/#/address/{address}',
        'block': 'https://tronscan.org/#/block/{block}',
        'name': 'https://tronscan.org/',
        'transaction': 'https://tronscan.org/#/transaction/{transaction}',
      },
    ],
    'status': 'LISTED',
    'createdAt': '2023-05-31T00:29:24.951Z',
    'updatedAt': '2023-05-31T00:29:24.951Z',
  },
] as unknown as IServerNetwork[];

serverPresetNetworks.unshift(FAKE_ALL_NETWORK);

export { serverPresetNetworks };

export const OnekeyNetworkUpdatedAt = 1685492989977;
