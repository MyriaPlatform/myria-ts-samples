import { DeveloperAccountManager, EnvTypes,WalletManager } from "myria-core-sdk";
import config from "../config";

(async (): Promise<void> => {
  const env = config.environment;
  const starkKey = config.stark_key;


  const developerAccountManager = new DeveloperAccountManager(EnvTypes.STAGING)

  console.log(`Retrieving user balance...`);
  const response = await developerAccountManager.getBalanceERC20(starkKey);

  console.log("Response:");
  console.log(JSON.stringify(response, null, 2));
})();
