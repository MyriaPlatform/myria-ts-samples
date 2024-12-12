import { ethers } from "ethers";
import { DeveloperAccountManager, EnvTypes, IMyriaClient, ModuleFactory, MyriaClient } from "myria-core-sdk";
import config from "../config";

(async (): Promise<void> => {
  const starkKey = config.stark_key;

  const developerAccountManager = new DeveloperAccountManager(EnvTypes.STAGING)

  console.log(`Retrieving user balance...`);
  const response = await developerAccountManager.getBalanceETH(starkKey);

  console.log("Response:");
  console.log(JSON.stringify(response, null, 2));

  const pureEthBalance = ethers.utils.formatEther(response.amount)
  console.log('Ethereum balance: ', pureEthBalance);

})();
