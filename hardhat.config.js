require("@nomiclabs/hardhat-waffle")
require("@nomiclabs/hardhat-etherscan")
require("hardhat-deploy")
require("solidity-coverage")
require("hardhat-gas-reporter")
require("hardhat-contract-sizer")
require("dotenv").config()

GOERLI_RPC_URL = process.env.GOERLI_RPC_URL || "https/eth-goerli/example"
PRIVATE_KEY = process.env.PRIVATE_KEY || "3fg"
ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || "68fg"
COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY || "3fgg"

module.exports = {
    defaultNetwork: "hardhat",
    networks: {
        hardhat: {
            chainId: 31337,
            blockConfirmations: 1,
        },
        goerli: {
            chainId: 5,
            blockConfirmations: 6,
            url: GOERLI_RPC_URL,
            accounts: [PRIVATE_KEY],
        },
    },
    gasReporter: {
        enabled: false,
        currency: "USD",
        outputFile: "gas-report.txt",
        noColors: true,
        //coinmarketcap: process.env.COINMARKETCAP_API_KEY,
    },
    solidity: "0.8.17",
    namedAccounts: {
        deployer: {
            default: 0,
        },
        player: {
            default: 1,
        },
    },
}
