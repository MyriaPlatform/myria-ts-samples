import { CollectionByIdDetailsParams, IMyriaClient, ModuleFactory, MyriaClient } from "myria-core-sdk";
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

  const payload: CollectionByIdDetailsParams = {
    collectionId: 82,
    limit: 10,
    page: 1,
    filterField: "orderType",
    filterValue: "SELL"
  }

  console.log(`Retrieving assets...`);
  const assetsResponse = await assetManager.getAssetsWithFilter(
    payload
  );

  console.log("Response:");
  console.log(JSON.stringify(assetsResponse, null, 2));
})();