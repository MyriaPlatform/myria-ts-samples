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
  const response = await userManager.getBalanceERC20(starkKey);

  console.log("Response:");
  console.log(JSON.stringify(response, null, 2));
})();
