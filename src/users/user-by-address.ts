import { Modules } from "myria-core-sdk";
import config from "../config";

const ownerPublicKey: string = config.owner_public_key;

export async function getUserByAddress() {
  const userModule: Modules.UserModule = new Modules.UserModule();

  let userResponse;
  try {
    userResponse = await userModule.getUserByWalletAddress(ownerPublicKey);
  } catch (error) {
    throw new Error(JSON.stringify(error, null, 2));
  }

  console.log("Retrieving the user...");
  console.log(JSON.stringify(userResponse, null, 2));
  return userResponse;
}

getUserByAddress();