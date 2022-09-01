import { IMyriaClient, ModuleFactory, MyriaClient, OnchainAssetManager } from "myria-core-sdk";
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

  let assetsResponse;
  try {
    console.log(`Retrieving assets...`);
    assetsResponse = await assetManager.getListAssetsByStarkKey(
      starkKey
    );
  } catch (error) {
    throw new Error(JSON.stringify(error, null, 2));
  }

  console.log("Requested assets response:");
  console.log(JSON.stringify(assetsResponse, null, 2));
})();
