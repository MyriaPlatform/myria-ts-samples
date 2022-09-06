import { ethers } from "ethers";
import config from "../config";
const starkwareLib = require("@starkware-industries/starkware-crypto-utils");
const keyDerivation = starkwareLib.keyDerivation;

(async (): Promise<void> => {
  const privateKey = config.private_key;
  let signer = new ethers.Wallet(privateKey);

  console.log("Signing a message...");
  // don't change the value of signMessage!
  let signature = await signer.signMessage("Sign-in to your Myria L2 Wallet");
  console.log("Message signature result:", signature);

  console.log("Generating a Stark Key...");
  const privateKeyFromSignature =
    keyDerivation.getPrivateKeyFromEthSignature(signature);
  const starkKey = keyDerivation.privateToStarkKey(privateKeyFromSignature);

  console.log("Generated Stark Key result:", "0x" + starkKey);
})();
