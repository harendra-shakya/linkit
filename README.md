Link + kit = [Linkit](https://linkit-harendra-shakya.vercel.app/)

## Inspiration

The problem I faced while building [FellowSwap](https://github.com/harendra-shakya/fellowswap) was that there was no good way to display real-time token prices on frontend without adding anything to my contract as it would have increased my contract size otherwise. 

## What it does

It is a wrapper contract around chainlink data feeds which once deployed then anyone can use to get the real-time prices of tokens for FREE with just token names e.g. ETH, BTC, DAI.

Linkit will help in the adoption of chainlink as it makes getting data more easily without any hassle.

I want to make it like what openzeppelin is for solidity, it made writing contracts so easy and helped in the adoption of solidity.

Currently, it is only for chainlink data feeds.

## How we built it

So to build this first I get all the price feed addresses from the chainlink website and looped them with their string name. So now, if it is deployed once then anyone can get the price of any token for FREE and easily with just the token name e.g. LINK, ETH, MATIC, etc. These are the following technologies I used.

- **Chainlink** - Used chainlink Data feeds for making this awesome contract
- **Polygon(Sponsor)** - Project Deployed on Polygon testnet.
- **Solidity** - For writing smart contract
- **Hardhat**- For deploying
- **Typescript** - Typescript is used for writing frontend code.
- **Next js** - Helped in building frontend efficiently.
- **Ethers** - Library to interact with the blockchain
- **Tailwindcss** - Helped in building ui

## Accomplishments that we're proud of

I'm proud that I am able to make a thing that will allow others to use chainlink more easily and help in the adoption of chainlink.

## What's next for Linkit

It's currently on Polygon Mumbai testnet and that's why it has limited price feed data, I would like to deploy that on mainnet so it becomes easy for everyone to use it for FREE.
