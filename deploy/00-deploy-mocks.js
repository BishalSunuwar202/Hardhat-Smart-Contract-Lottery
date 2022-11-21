const { network } = require("hardhat")
const { developmentChains } = require("../helper-hardhat-config")

const BASE_FEE = ethers.utils.parseEther("0.25") //0.25 is the premium. It cost 0.25 LINK per request
const GAS_PRICE_LINK = 1e9 //link per gas or calculated value based on the gas price of the chain

//Chainlink Nodes pays the gas fees to give us randomness and do external execution
//so chainlink changes the price of requests based on the price of the gas so they never go bankrupt
module.exports = async function ({ getNamedAccounts, deployments }) {
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()
    const args = [BASE_FEE, GAS_PRICE_LINK]

    if (developmentChains.includes(network.name)) {
        log("local network detected, Deploy mocks")
        // deploy a mock VRFcoordinator......
        await deploy("VRFCoordinatorV2Mock", {
            from: deployer,
            log: true,
            args: args,
        })
        log("Mocks Deployed")
        log("------------------------------------------------")
    }
}
module.exports.tags = ["all", "mocks"]
