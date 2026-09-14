# Smart contracts

This package holds the Hardhat project for the launchpad contracts.

| Contract                                     | Description                                                                                                 |
| -------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| [`TokenFactory.sol`](contracts/TokenFactory.sol) | Deploys memecoins, sells them along an exponential bonding curve, and lists them on Uniswap V2 when funding reaches 24 ETH |
| [`Token.sol`](contracts/Token.sol)             | OpenZeppelin ERC-20 whose owner (the factory) is the only account allowed to mint                          |

## Setup

```bash
npm install
cp .env.example .env
```

| Variable              | Required for          | Description                                             |
| --------------------- | --------------------- | ------------------------------------------------------- |
| `MAINNET_RPC_URL`     | tests                 | Ethereum mainnet RPC. The local network forks it so tests can call the real Uniswap V2 contracts. |
| `SEPOLIA_RPC_URL`     | deploying to Sepolia  | Sepolia RPC URL                                         |
| `DEPLOYER_PRIVATE_KEY`| deploying to Sepolia  | Private key of the account that pays for deployment. **Never commit it.** |

## Scripts

```bash
npm run compile          # compile contracts
npm test                 # run tests on a mainnet fork
npm run node             # start a local Hardhat node
npm run deploy:sepolia   # deploy TokenFactory to Sepolia with Hardhat Ignition
```

## Contract API

### `createMemeToken(name, symbol, imageUrl, description)` — payable

Deploys a new `Token`, mints the initial 200,000 tokens to the factory, and records the token's metadata. You must send at least `0.0001 ETH`. The function returns the new token's address.

### `buyMemeToken(memeTokenAddress, tokenQty)` — payable

Buys `tokenQty` whole tokens at the current bonding-curve price. Send at least the amount returned by `calculateCost`. When the token's total funding reaches `24 ETH`, the factory creates a Uniswap V2 pair, adds the reserved supply and the raised ETH as liquidity, and burns the LP tokens.

### `calculateCost(currentSupply, tokensToBuy)` — view

Returns the price in wei of `tokensToBuy` tokens, where `currentSupply` is the number of tokens already sold on the curve.

### `getAllMemeTokens()` — view

Returns metadata for every token launched through the factory.
