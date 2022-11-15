import { useEffect, useState } from "react";
import linkitAbi from "../constants/Linkit.json";
import addresses from "../constants/networkMapping.json";
import { ethers } from "ethers";

declare var window: any;

export default function Main(): JSX.Element {
    const [isDisabled, setIsDisabled] = useState(false);
    const [price, setPrice] = useState<number>();

    const fetchBalance = async function (name: string) {
        setIsDisabled(true);
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = await provider.getSigner();
        const address = addresses["80001"]["Linkit"][0];
        const contract = await new ethers.Contract(address, linkitAbi, signer);
        const data = await contract.getLatestPrice(name);
        const _price = parseInt(data[0]) / 10 ** parseInt(data[1]);
        setPrice(_price);
        setIsDisabled(false);
    };

    return (
        <>
            <div className="bg-blueGray-600 relative pr-52 md:ml-64">
                <div className={`container mx-auto h-full pr-12 pt-12`}>
                    <div className="flex h-full content-center items-center justify-center">
                        <div className="w-full px-4 lg:w-4/12">
                            <div className="bg-blueGray-200 relative mb-6 flex w-full min-w-0 flex-col break-words rounded-lg border-0">
                                <div className="flex-auto px-4 py-10 pt-0 lg:px-10">
                                    <form>
                                        <div className="relative mb-3 w-full">
                                            <label className="mb-2 block text-xs font-bold uppercase text-blue-600 pt-12">
                                                It is on Polygon Mumbai testnet so you can get
                                                balaance of only limited tokens like ETH, BTC, DAI,
                                                LINK, USDC USDT, MATIC
                                            </label>
                                        </div>

                                        <div className="relative mb-3 w-full">
                                            <label className="mb-2 block text-xs font-bold uppercase text-blue-600 pt-52">
                                                Token Name
                                            </label>
                                            <input
                                                type=""
                                                className="placeholder-blueGray-300 text-blueGray-600 w-full rounded border-0 bg-white px-3 py-3 text-sm shadow transition-all duration-150 ease-linear focus:outline-none focus:ring"
                                                placeholder="ETH"
                                                onChange={(e) => {
                                                    fetchBalance(e.target.value);
                                                }}
                                            />
                                        </div>
                                        <div>{price}</div>
                                        <button
                                            className="mr-1 mb-1 w-full rounded bg-blue-600 px-6 py-3 text-sm font-bold uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-lg focus:outline-none active:bg-blue-600"
                                            type="button"
                                            disabled={isDisabled}
                                        >
                                            {isDisabled ? "Fetching...." : "Get Balance"}
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
