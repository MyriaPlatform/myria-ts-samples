import { Modules } from "myria-core-sdk";
import config from "../config";

(async (): Promise<void> => {
  const userModule: Modules.UserModule = new Modules.UserModule();
  
  const publicKey: string = config.user_public_key;
  const starkKey: string = config.user_stark_key;

  let userResponse;
  try {
    console.log("Registering the user...");
    userResponse = await userModule.registerUser(starkKey, publicKey);
  } catch (error) {
    throw new Error(JSON.stringify(error, null, 2));
  }

  console.log("Registered user response:");
  console.log(JSON.stringify(userResponse, null, 2));
})();
