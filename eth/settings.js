module.exports = {
    // operating chain list
    chainList: [
        'eth',
        'klaytn',
        'icon',
        'orbit',
        'avax',
        'bsc',
        'celo',
        'heco',
        'fantom',
        'harmony',
        'matic',
        'moonriver',
        'oec',
        'xdai',
        "stacks",
        "ton",
    ],

    // Bridge Addresses
    BridgeAddress: {
        OrbitHubContract: "0xb5680a55d627c52de992e3ea52a86f19da475399",
        EthBridgeContract: "0x78d80c33f23a3395c52b3a8c0d0b12253771b9f7",
        KlaytnBridgeContract: "0x1af95905bb0042803f90e36d79d13aea6cd58969",
        IconBridgeContract: "0x6819374cb320d1184a681e2b53ad858d16b9c8fa",
        OrbitBridgeContract: "0x77a49649964a186Fd2b8754758c39c9438a6E9aB",
        StacksBridgeContract: "0x77d50F8e3A95DC0FE71057E54E4Ee9C86147d861",
        TonBridgeContract: "0x25605C6247fDBC95D91275025ed3dc2632936c3a",
        MessageMultiSigWallet: {
            Hub: "0xfffec9385a40a12f8526fefc0036b6fc44b68092",
            Eth: "0xfffec9385a40a12f8526fefc0036b6fc44b68092",
            Avax: "0xfffec9385a40a12f8526fefc0036b6fc44b68092",
            Bsc: "0xfffec9385a40a12f8526fefc0036b6fc44b68092",
            Celo: "0xfffec9385a40a12f8526fefc0036b6fc44b68092",
            Fantom: "0xfffec9385a40a12f8526fefc0036b6fc44b68092",
            Harmony: "0xfffec9385a40a12f8526fefc0036b6fc44b68092",
            Heco: "0xfffec9385a40a12f8526fefc0036b6fc44b68092",
            Icon: "0xfffec9385a40a12f8526fefc0036b6fc44b68092",
            Klaytn: "0xfffec9385a40a12f8526fefc0036b6fc44b68092",
            Matic: "0xfffec9385a40a12f8526fefc0036b6fc44b68092",
            Moonriver: "0xfffec9385a40a12f8526fefc0036b6fc44b68092",
            Oec: "0xfffec9385a40a12f8526fefc0036b6fc44b68092",
            Stacks: "0xe62Fa6C59AD14B46d4e7791FA817030732953b79",
            Ton: "0xFb504CD4eD46024B83c4337044995CF112205f18",
            Xdai: "0xfffec9385a40a12f8526fefc0036b6fc44b68092",
            Orbit: "0xfffec9385a40a12f8526fefc0036b6fc44b68092",
        },
        Eth: {
            EthVaultContract: "0x1bf68a9d1eaee7826b3593c20a0ca93293cb489a",
        },
        Avax: {
            AvaxMinterContract: "0x6BD8E3beEC87176BA9c705c9507Aa5e6F0E6706f",
            MessageMultiSigWallet: "0xFA9c34485c3a706725130E8e0217431AC000E31e",
            AvaxAdminContract: "0xe62Fa6C59AD14B46d4e7791FA817030732953b79",
        },
        Bsc: {
            BscMinterContract: "0x6BD8E3beEC87176BA9c705c9507Aa5e6F0E6706f",
            MessageMultiSigWallet: "0xFA9c34485c3a706725130E8e0217431AC000E31e",
            BscAdminContract: "0xe62Fa6C59AD14B46d4e7791FA817030732953b79",
        },
        Celo: {
            CeloMinterContract: "0x6BD8E3beEC87176BA9c705c9507Aa5e6F0E6706f",
            MessageMultiSigWallet: "0xFA9c34485c3a706725130E8e0217431AC000E31e",
            CeloAdminContract: "0xe62Fa6C59AD14B46d4e7791FA817030732953b79",
        },
        Fantom: {
            FantomMinterContract: "0x6BD8E3beEC87176BA9c705c9507Aa5e6F0E6706f",
            MessageMultiSigWallet: "0xFA9c34485c3a706725130E8e0217431AC000E31e",
            FantomAdminContract: "0xe62Fa6C59AD14B46d4e7791FA817030732953b79",
        },
        Harmony: {
            HarmonyMinterContract: "0x6BD8E3beEC87176BA9c705c9507Aa5e6F0E6706f",
            MessageMultiSigWallet: "0xFA9c34485c3a706725130E8e0217431AC000E31e",
            HarmonyAdminContract: "0xe62Fa6C59AD14B46d4e7791FA817030732953b79",
        },
        Heco: {
            HecoMinterContract: "0x6BD8E3beEC87176BA9c705c9507Aa5e6F0E6706f",
            MessageMultiSigWallet: "0xFA9c34485c3a706725130E8e0217431AC000E31e",
            HecoAdminContract: "0xe62Fa6C59AD14B46d4e7791FA817030732953b79",
        },
        Icon: {
            IconMinterContract: "cx0eb215b6303142e37c0c9123abd1377feb423f0e",
            MessageMultiSigWallet: "cxa032c913d5d9b7577e2b19f39d91985e5c260577",
        },
        Klay: {
            KlaytnMinterContract: "0x60070F5D2e1C1001400A04F152E7ABD43410F7B9",
            MessageMultiSigWallet: "0x74bB62c446c592a5A8424d4f9437242df1e26BF0",
        },
        Matic: {
            MaticMinterContract: "0x6BD8E3beEC87176BA9c705c9507Aa5e6F0E6706f",
            MessageMultiSigWallet: "0xFA9c34485c3a706725130E8e0217431AC000E31e",
            MaticAdminContract: "0xe62Fa6C59AD14B46d4e7791FA817030732953b79",
        },
        Moonriver: {
            MoonriverMinterContract: "0x6BD8E3beEC87176BA9c705c9507Aa5e6F0E6706f",
            MessageMultiSigWallet: "0xFA9c34485c3a706725130E8e0217431AC000E31e",
            MoonriverAdminContract: "0xe62Fa6C59AD14B46d4e7791FA817030732953b79",
        },
        Oec: {
            OecMinterContract: "0x6BD8E3beEC87176BA9c705c9507Aa5e6F0E6706f",
            MessageMultiSigWallet: "0xFA9c34485c3a706725130E8e0217431AC000E31e",
            OecAdminContract: "0xe62Fa6C59AD14B46d4e7791FA817030732953b79",
        },
        Stacks: {
            DeployAddress: "SP3TFQJG55DV78VZEYVD7NSNDT3SF2C9R37SKZA1C",
            MessageMultiSigWallet: "gov-eth",
            "0x0000000000000000000000000000000000000000": "orbit-eth",
            "0xdac17f958d2ee523a2206206994597c13d831ec7": "orbit-usdt",
            "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48": "orbit-usdc",
            "0xc355fe6e4e99c0b93577f08c4e9a599714435912": "orbit-dai",
            "0x662b67d00a13faf93254714dd601f5ed49ef2f51": "orbit-orc",
        },
        Ton: {
            TonMinterContract: "EQAihs8RdUgLANjNypV5LgaUHfdoUsMVL5o06K2F-qFSki00",
            MessageMultiSigWallet: "EQBbAqI1eVJ8PbZpKXA5njk6hq8Q6ZUxwXLZf-ntG1wf90Tm",
        },
        Xdai: {
            XdaiMinterContract: "0x6BD8E3beEC87176BA9c705c9507Aa5e6F0E6706f",
            MessageMultiSigWallet: "0xFA9c34485c3a706725130E8e0217431AC000E31e",
            XdaiAdminContract: "0xe62Fa6C59AD14B46d4e7791FA817030732953b79",
        },
        Orbit: {
            OrbitMinterContract: "0x1b57Ce997Ca6a009ce54bB2d37DEbEBadFDbBb06",
            MessageMultiSigWallet: "0xfffec9385a40a12f8526fefc0036b6fc44b68092",
        },
        Governance: {
            Chain: "ETH",
            Address: "0x1bf68a9d1eaee7826b3593c20a0ca93293cb489a",
            Bytes: "0x1bf68a9d1eaee7826b3593c20a0ca93293cb489a",
            Id: "0x50f408f4b0fb17bf4f5143de4bd95802410d00422f008e9deef06fb101a0f060",
        },
    },

    // Node Endpoints
    Endpoints : {
        Orbit: {
            rpc : "https://bridge-en.orbitchain.io:7443",
            socket: "wss://bridge-en.orbitchain.io:7444",
        },
        Avax: {
            rpc: ["https://api.avax.network/ext/bc/C/rpc", "https://rpc.ankr.com/avalanche", "https://ava-mainnet.public.blastapi.io/ext/bc/C/rpc"],
            socket: "https://api.avax.network/ext/bc/C/ws",
        },
        Bsc: {
            rpc : ["https://bscrpc.com", "https://rpc.ankr.com/bsc", "https://bsc.chain-node.orbitchain.io:7643"],
            socket: "wss://bsc-ws-node.nariox.org:443",
        },
        Celo: {
            rpc: ["https://forno.celo.org", "https://rpc.ankr.com/celo", "https://celo.chain-node.orbitchain.io:7643"],
            socket: "wss://forno.celo.org/ws",
        },
        Eth: {
            rpc: ["https://eth.chain-node.orbitchain.io:7643", "https://rpc.ankr.com/eth", "https://mainnet.infura.io/v3/[PROJECT_ID]"],
            socket: "wss://mainnet.infura.io/ws/v3/[PROJECT_ID]",
            beacon: "https://beacon.chain-node.orbitchain.io:7643",
        },
        Fantom: {
            rpc: ["https://rpc.ftm.tools", "https://rpc.fantom.network", "https://rpc.ankr.com/fantom"],
            socket: "wss://wsapi.fantom.network",
        },
        Harmony: {
            rpc: ["https://api.harmony.one", "https://rpc.ankr.com/harmony", "https://harmony-mainnet.chainstacklabs.com"],
            socket: "wss://ws.s0.t.hmny.io",
        },
        Heco: {
            rpc : ["https://heco.chain-node.orbitchain.io:7643", "https://http-mainnet.hecochain.com"],
            socket: "wss://ws-mainnet.hecochain.com",
        },
        Icon: {
            api: 'https://ctz.solidwallet.io/api/v3',
            rpc: 'https://ctz.solidwallet.io/api/v3',
            debug: 'https://ctz.solidwallet.io/api/debug/v3',
            version: 3,
            nid: 1
        },
        Klaytn: {
            isKas: true,
            Kas: {
                // KAS Default
                rpc: "https://node-api.klaytnapi.com/v1/klaytn",
                chainId: 8217,

                // Your Credential
                accessKeyId: "",
                secretAccessKey: ""
            },
            rpc: ["https://klaytn-mainnet-rpc.allthatnode.com:8551", "https://klaytn01.fandom.finance", "https://klaytn02.fandom.finance", "https://public-node-api.klaytnapi.com/v1/cypress"],
            socket: "wss://public-node-api.klaytnapi.com/v1/cypress/ws"
        },
        Matic: {
            rpc : ["https://polygon-rpc.com", "https://matic.chain-node.orbitchain.io:7643", "https://rpc.ankr.com/polygon"],
            socket: "wss://rpc-mainnet.matic.quiknode.pro",
        },
        Moonriver: {
            rpc: ["https://moonriver.public.blastapi.io", "https://rpc.api.moonriver.moonbeam.network"],
            socket: "wss://wss.api.moonriver.moonbeam.network",
        },
        Oec: {
            rpc: ["https://exchainrpc.okex.org", "https://oec.chain-node.orbitchain.io:7643"],
            socket: "wss://exchainws.okex.org:8443",
        },
        Stacks: {
            url: "https://stacks-node-api.mainnet.stacks.co",
            network: "mainnet",
        },
        Ton: {
            rpc: "https://toncenter.com/api/v2/jsonRPC",
            apiKey: "REPLACE THIS STIRING TO ISSUED API TOKEN",
        },
        Xdai: {
            rpc: ["https://rpc.gnosischain.com", "https://rpc.ankr.com/gnosis", "https://gnosis-mainnet.public.blastapi.io"],
            socket: "ws://xdai.poanetwork.dev:8546",
        },
    },

    ETH_CHAIN_ID: '0x1',
    AVAX_CHAIN_ID: '0xa86a',
    CELO_CHAIN_ID: '0xa4ec',
    FANTOM_CHAIN_ID: '0xfa',
    HARMONY_CHAIN_ID: 1666600000,
    HARMONY_GAS_PRICE: 50 * 10 ** 9,
    HECO_CHAIN_ID: '0x80',
    MATIC_CHAIN_ID: '0x89',
    OEC_CHAIN_ID: 66,

    ETH_TERMINAL_TOTAL_DIFFICULTY: "58750000000000000000000",

    DEBUG: true,
    LOGLEVEL: 'debug',

    VALIDATOR_ACCOUNT: {
        TYPE: "PK",
        DATA: "0000000000000000000000000000000000000000000000000000000000000000",
    },

    VALIDATOR_MONITOR: {
        Ozys: {
            Endpoint: "https://bridge-en.orbitchain.io:7743/v1/validator/report",
            Interval: 60 * 1000,
        },
    },
}
