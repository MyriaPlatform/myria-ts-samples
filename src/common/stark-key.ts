import { ethers } from "ethers";
import config from "../config";
const starkwareLib = require("@starkware-industries/starkware-crypto-utils");
const keyDerivation = starkwareLib.keyDerivation;

export async function generateStarkKey() {
  const privateKey = config.owner_private_key;
  let signer = new ethers.Wallet(privateKey);

  let signature = await signer.signMessage("Message request signature: ");
  console.log("signature:", signature);

  const privateKeyFromSignature =
    keyDerivation.getPrivateKeyFromEthSignature(signature);
  const starkKey = keyDerivation.privateToStarkKey(privateKeyFromSignature);

  console.log("starkKey:", starkKey);
}

generateStarkKey();
