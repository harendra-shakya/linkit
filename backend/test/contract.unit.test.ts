import { BigNumber, Contract, ContractFactory } from "ethers";
import { expect, assert } from "chai";
const { ethers, network } = require("hardhat");

describe("contract tests", function () {
    const amount1 = ethers.utils.parseEther("1");
    let linkit: Contract, user: Contract, user2: Contract;

    beforeEach(async function () {
        const accounts = await ethers.getSigners(2);
        user = accounts[0];
        user2 = accounts[1];

        const contractFactory: ContractFactory = await ethers.getContractFactory("Linkit");
        linkit = await contractFactory.deploy(
            ["BTC", "DAI", "ETH", "LINK", "MATIC", "SAND", "USDC", "USDT"],
            [
                "0x007A22900a3B98143368Bd5906f8E17e9867581b",
                "0x0fcaa9c899ec5a91ebc3d5dd869de833b06fb046",
                "0x0715A7794a1dc8e42615F059dD6e406A6594651A",
                "0x1C2252aeeD50e0c9B64bDfF2735Ee3C932F5C408",
                "0xd0D5e3DB44DE05E9F294BB0a3bEEaF030DE24Ada",
                "0x9dd18534b8f456557d11B9DDB14dA89b2e52e308",
                "0x572dDec9087154dC5dfBB1546Bb62713147e0Ab0",
                "0x92C09849638959196E976289418e5973CC96d645",
            ]
        );
        await linkit.deployed();
    });

    describe("getPriceFee", function () {
        it("gives price feed with just token name", async function () {
            const daiPrice = await linkit.getLatestPrice("DAI");
            const btcPrice = await linkit.getLatestPrice("BTC");
            const ethPrice = await linkit.getLatestPrice("ETH");
            const maticPrice = await linkit.getLatestPrice("MATIC");
            const usdcPrice = await linkit.getLatestPrice("USDC");

            console.log("Price of Dai: ", parseInt(daiPrice[0]) / 10 ** parseInt(daiPrice[1]));
            console.log("Price of eth: ", parseInt(ethPrice[0]) / 10 ** parseInt(ethPrice[1]));
            console.log("Price of btc: ", parseInt(btcPrice[0]) / 10 ** parseInt(btcPrice[1]));
            console.log(
                "Price of matic: ",
                parseInt(maticPrice[0]) / 10 ** parseInt(maticPrice[1])
            );
            console.log("Price of usdc: ", parseInt(usdcPrice[0]) / 10 ** parseInt(usdcPrice[1]));
        });
    });
});
