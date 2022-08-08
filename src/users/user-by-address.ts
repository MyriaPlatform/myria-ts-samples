import { Modules } from "myria-core-sdk";
import { UserManager } from "myria-core-sdk/dist/types/src/modules";
import { getMyriaClient } from "../common/myria-client";
import config from "../config";

(async (): Promise<void> => {
  const myriaClient = await getMyriaClient();
  const userManager: UserManager = new UserManager(myriaClient);
  const publicKey: string = config.user_public_key;

  let userResponse;
  try {
    console.log("Retrieving the user...");
    userResponse = await userManager.getUserByWalletAddress(publicKey);
  } catch (error) {
    throw new Error(JSON.stringify(error, null, 2));
  }

  console.log("Requested user response:");
  console.log(JSON.stringify(userResponse, null, 2));
})();
