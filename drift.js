import { Wallet } from "@coral-xyz/anchor";
import { Connection, Keypair } from "@solana/web3.js";
import { DriftClient } from "@drift-labs/sdk";
import bs58 from "bs58";

const main = async () => {
  const connection = new Connection(process.env.RPC);

  const privateKey = process.env.WALLET_PRIVATE_KEY;

  const decodedPrivateKey = bs58.decode(privateKey);

  const keypair = Keypair.fromSecretKey(decodedPrivateKey);

  const wallet = new Wallet(keypair);

  const driftClient = new DriftClient({
    connection,
    wallet,
    env: "mainnet-beta",
    programID: "dRiftyHA39MWEi3m9aunc5MzRF1JYuBsbn6VPcn33UH",
  });

  await driftClient.subscribe();

  // Function to fetch and display uPL in USDC
  const fetchAndDisplayUPL = async () => {
    const user = driftClient.getUser();
    const uPL = user.getUnrealizedPNL().toNumber() / 1000000;
    console.log(`Claimable: ${uPL} USDC`);
  };

  // Check uPL every 5 seconds
  setInterval(fetchAndDisplayUPL, 10000);
};

main().catch((err) => console.log(err));
