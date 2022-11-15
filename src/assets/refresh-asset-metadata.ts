import { IMyriaClient, ModuleFactory, MyriaClient } from "myria-core-sdk";
import config from "../config";

(async (): Promise<void> => {
  const env = config.environment;
  const assetId = config.assetId;
  const starkKey = config.stark_key;

  const iClient: IMyriaClient = {
    provider: null,
    networkId: null,
    web3: null,
    env: env
  };
  const mClient = new MyriaClient(iClient);
  const moduleFactory = new ModuleFactory(mClient);
  const assetManager = moduleFactory.getAssetOnchainManager();

  let syncAssets;
  try {
    console.log(`Refreshing asset metadata...`);
    syncAssets = await assetManager.refreshAssetMetadata(assetId, starkKey );
  } catch (error) {
    throw new Error(JSON.stringify(error, null, 2));
  }

  console.log("Refreshed metadata response:");
  console.log(JSON.stringify(syncAssets, null, 2));
})();
