import { Modules } from "myria-core-sdk";
import config from "../config";

(async (): Promise<void> => {
  const userModule: Modules.UserModule = new Modules.UserModule();

  let userResponse;
  try {
    console.log("Registering the user...");
    userResponse = await userModule.registerUser(
      config.user_stark_key,
      config.user_public_key
    );
  } catch (error) {
    throw new Error(JSON.stringify(error, null, 2));
  }

  console.log("Registered user response:");
  console.log(JSON.stringify(userResponse, null, 2));
})();
