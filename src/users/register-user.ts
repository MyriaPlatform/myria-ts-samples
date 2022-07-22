import { Modules } from "myria-core-sdk";
import config from "../config";

export async function appRegisterUser() {
  const userModule: Modules.UserModule = new Modules.UserModule();

  const userResponse = await userModule.registerUser(
    config.stark_key,
    config.owner_public_key
  );

  console.log(userResponse);
  return userResponse;
}

appRegisterUser();
