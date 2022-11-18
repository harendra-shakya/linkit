import { useMoralis } from "react-moralis";
import Main from "../components/Main";
import style from "../styles/Home.module.css";

export default function Home(): JSX.Element {
    const { isWeb3Enabled, chainId, account } = useMoralis();

    return (
        <div>
            {isWeb3Enabled ? (
                <div className={`${style.bgImg}`}>
                    {parseInt(chainId!) === 80001 ? (
                        <div>
                            <Main />
                        </div>
                    ) : (
                        <div>Plz Switch to Polygon Mumbai testnet</div>
                    )}
                </div>
            ) : (
                <div>Please Connect Your Wallet</div>
            )}
        </div>
    );
}
