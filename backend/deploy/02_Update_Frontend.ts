import { DeployFunction } from "hardhat-deploy/types";
import { ethers, network } from "hardhat";
import * as fs from "fs";

const deployFunction: DeployFunction = async () => {
    await updateAbi();
    await updateAddresses();
};

const abiPath = "../frontend/constants/";
const mappingPath = "../frontend/constants/networkMapping.json";

const updateAbi = async () => {
    const linkit = await ethers.getContract("Linkit");

    let _interface: string | NodeJS.ArrayBufferView = linkit.interface.format(
        ethers.utils.FormatTypes.json
    ) as string | NodeJS.ArrayBufferView;

    fs.writeFileSync(abiPath + "Linkit.json", _interface);
};

const updateAddresses = async () => {
    const linkit = await ethers.getContract("Linkit");

    const contractAddresses = await JSON.parse(fs.readFileSync(mappingPath, "utf8"));
    const chainId = await network.config.chainId?.toString();

    if (chainId! in contractAddresses) {
        if (!contractAddresses[chainId!]["Linkit"]) {
            contractAddresses[chainId!]["Linkit"] = [linkit.address];
        } else {
            contractAddresses[chainId!]["Linkit"].pop();
            contractAddresses[chainId!]["Linkit"].push(linkit.address);
        }
    } else {
        contractAddresses[chainId!] = { ["Linkit"]: [linkit.address] };
    }

    fs.writeFileSync(mappingPath, JSON.stringify(contractAddresses));
};

export default deployFunction;
deployFunction.tags = ["all", "frontend"];
