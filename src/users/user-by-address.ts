import { Modules } from "myria-core-sdk";
import config from "../config";

(async (): Promise<void> => {
  const userModule: Modules.UserModule = new Modules.UserModule();
  const publicKey: string = config.user_public_key;

  let userResponse;
  try {
    console.log("Retrieving the user...");
    userResponse = await userModule.getUserByWalletAddress(publicKey);
  } catch (error) {
    throw new Error(JSON.stringify(error, null, 2));
  }

  console.log("Requested user response:");
  console.log(JSON.stringify(userResponse, null, 2));
})();
