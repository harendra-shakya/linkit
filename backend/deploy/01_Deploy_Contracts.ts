import { DeployFunction } from "hardhat-deploy/types";
import { network } from "hardhat";
import { verify } from "../utils/verify";

const deployFunction: DeployFunction = async ({ getNamedAccounts, deployments }) => {
    const { deploy, log } = deployments;
    const { deployer } = await getNamedAccounts();
    const developmentChains: string[] = ["hardhat", "localhost"];
    const chainId: number | undefined = network.config.chainId;
    if (!chainId) return;

    const waitConfirmations: number = developmentChains.includes(network.name) ? 1 : 6;

    log("-----------------------------------------------------------");
    log("deploying......");

    const args: string[][] = [
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
        ],
    ];

    const linkit = await deploy("Linkit", {
        from: deployer,
        log: true,
        args: args,
        waitConfirmations: waitConfirmations,
    });

    // if (!developmentChains.includes(network.name)) {
    //     await verify(linkit.address, args);
    // }
};

export default deployFunction;
deployFunction.tags = ["all", "main"];
