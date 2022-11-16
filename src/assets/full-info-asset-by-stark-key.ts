import { IMyriaClient, ModuleFactory, MyriaClient } from "myria-core-sdk";
import config from "../config";

(async (): Promise<void> => {
  const starkKey = config.stark_key;
  const env = config.environment;

  const iClient: IMyriaClient = {
    provider: null,
    networkId: null,
    web3: null,
    env: env
  };
  const mClient = new MyriaClient(iClient);
  const moduleFactory = new ModuleFactory(mClient);
  const assetManager = moduleFactory.getAssetOnchainManager();

  console.log(`Retrieving assets...`);
  const assetsResponse = await assetManager.getFullInfoAssetByStarkKey(
    starkKey
  );

  console.log("Response:");
  console.log(JSON.stringify(assetsResponse, null, 2));
})();
