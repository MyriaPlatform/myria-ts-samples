import { UserManager } from 'myria-core-sdk/dist/cjs/src/modules';
import { UserData } from 'myria-core-sdk/dist/types/src/types/UserTypes';
import { getMyriaClient } from '../common/myria-client';
import config from "../config";

(async (): Promise<void> => {
  const myriaClient = await getMyriaClient();
  const userManager: UserManager = new UserManager(myriaClient);
  
  const publicKey: string = config.user_public_key;
  const starkKey: string = config.user_stark_key;

  let userResponse;
  try {
    console.log("Registering the user...");
    const userData: UserData = {
      starkKey: starkKey,
      ethAddress: publicKey
    }
    userResponse = await userManager.registerUser(userData);
  } catch (error) {
    throw new Error(JSON.stringify(error, null, 2));
  }

  console.log("Registered user response:");
  console.log(JSON.stringify(userResponse, null, 2));
})();
