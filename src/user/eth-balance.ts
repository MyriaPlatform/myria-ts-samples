import { ethers } from "ethers";
import { IMyriaClient, ModuleFactory, MyriaClient } from "myria-core-sdk";
import config from "../config";

(async (): Promise<void> => {
  const env = config.environment;
  const starkKey = config.stark_key;

  const iClient: IMyriaClient = {
    provider: null,
    networkId: null,
    web3: null,
    env: env
  };
  const mClient = new MyriaClient(iClient);
  const moduleFactory = new ModuleFactory(mClient);
  const userManager = moduleFactory.getUserManager();

  console.log(`Retrieving user balance...`);
  const response = await userManager.getBalanceETH(starkKey);

  console.log("Response:");
  console.log(JSON.stringify(response, null, 2));

  const pureEthBalance = ethers.utils.formatEther(response.amount)
  console.log('Ethereum balance: ', pureEthBalance);

})();
