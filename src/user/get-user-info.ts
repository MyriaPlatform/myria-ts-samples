import { DeveloperAccountManager, EnvTypes } from "myria-core-sdk";
import config from "../config";

(async (): Promise<void> => {
  const starkKey = config.stark_key;

  const developerAccountManager = new DeveloperAccountManager(EnvTypes.STAGING)

  console.log(`Retrieving user id information...`);
  const walletAddress = '0xC6B32A7b80e6dA776E88aC41b9BA45B8Ec1A02DA';
  const userData = await developerAccountManager.getUserId(walletAddress);


  console.log("Response:");
  console.log(JSON.stringify(userData, null, 2));


})();

