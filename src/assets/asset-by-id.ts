import { IMyriaClient, ModuleFactory, MyriaClient } from "myria-core-sdk";
import config from "../config";

(async (): Promise<void> => {
  const env = config.environment;
  const assetId = "13287";

  const iClient: IMyriaClient = {
    provider: null,
    networkId: null,
    web3: null,
    env: env
  };
  const mClient = new MyriaClient(iClient);
  const moduleFactory = new ModuleFactory(mClient);
  const assetManager = moduleFactory.getAssetOnchainManager();

  console.log(`Retrieving asset...`);
  const assetsResponse = await assetManager.getAssetById(
    assetId
  );

  console.log("Response:");
  console.log(JSON.stringify(assetsResponse, null, 2));
})();
