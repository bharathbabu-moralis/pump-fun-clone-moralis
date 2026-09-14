# Frontend

This is the React app for the launchpad. It reads token data from the `TokenFactory` contract through an RPC node, sends transactions through the user's browser wallet, and loads holders and transfers from the [Moralis Web3 Data API](https://docs.moralis.io/web3-data-api/evm).

## Setup

```bash
npm install
cp .env.example .env
npm start
```

| Variable                     | Description                     |
| ---------------------------- | ------------------------------- |
| `REACT_APP_CONTRACT_ADDRESS` | Deployed `TokenFactory` address |
| `REACT_APP_RPC_URL`          | Sepolia RPC URL                 |
| `REACT_APP_X_API_KEY`        | Moralis Web3 Data API key       |

## Pages

| Route                          | Component         | Description                                                    |
| ------------------------------ | ----------------- | -------------------------------------------------------------- |
| `/`                            | `Home.jsx`        | Lists every launched token                                     |
| `/token-create`                | `TokenCreate.jsx` | Form to launch a new token                                     |
| `/token-detail/:tokenAddress`  | `TokenDetail.jsx` | Bonding-curve progress, buy flow, holders, and transfer history |

## Scripts

```bash
npm start       # dev server at http://localhost:3000
npm run build   # production build in ./build
```
