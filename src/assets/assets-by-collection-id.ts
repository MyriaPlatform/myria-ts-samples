import { CollectionDetailsParams, IMyriaClient, ModuleFactory, MyriaClient } from "myria-core-sdk";
import config from "../config";

(async (): Promise<void> => {
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

  const payload: CollectionDetailsParams = {
    collectionId: 82,
    limit: 10,
    page: 1,
    filterField: [""],
    filterValue: [""]
  }

  let assetsResponse;
  try {
    console.log(`Retrieving assets...`);
    assetsResponse = await assetManager.getAssetsByCollectionId(
      payload
    );
  } catch (error) {
    throw new Error(JSON.stringify(error, null, 2));
  }

  console.log("Response:");
  console.log(JSON.stringify(assetsResponse, null, 2));
})();
