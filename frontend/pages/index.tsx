import { useMoralis } from "react-moralis";
import Main from "../components/Main";

export default function Home(): JSX.Element {
    const { isWeb3Enabled, chainId, account } = useMoralis();

    const supportedNetworks = [80001, 31337];

    return (
        <div>
            {isWeb3Enabled ? (
                <div>
                    {supportedNetworks.includes(parseInt(chainId!)) ? (
                        <div>
                            <Main />
                        </div>
                    ) : (
                        <div>Plz Switch to a Supported network {supportedNetworks}</div>
                    )}
                </div>
            ) : (
                <div>Please Connect Your Wallet</div>
            )}
        </div>
    );
}
