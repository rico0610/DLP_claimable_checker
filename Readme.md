# Usage

1. **Install Dependencies:**

   - Install `@drift-labs/sdk` using yarn or npm.
     ```
     yarn add @drift-labs/sdk
     ```
   - Auto-generated documentation can be found [here](https://drift-labs.github.io/protocol-v2/sdk/).

2. **RPC HTTPS Endpoint:**

   - Create an account at [Helius](https://www.helius.dev/) to obtain an RPC HTTPS endpoint.

3. **Setting Up Environment Variables:**

   - Export your Solana wallet private key and the Helius RPC endpoint as environment variables:
     ```
     export WALLET_PRIVATE_KEY=<Your Solana wallet private key>
     export RPC=<HTTPS mainnet endpoint from helius.dev>
     ```
   - **Security Note:** Be careful with your private key. Never expose it in your code or public repositories.

4. **Running the Script:**
   - To run the script, use:
     ```
     node drift.js
     ```
