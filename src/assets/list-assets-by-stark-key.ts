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
  const assetManager = moduleFactory.getAssetOnchainManager();

  let assetsResponse;
  try {
    console.log(`Retrieving asset...`);
    assetsResponse = await assetManager.getListAssetsByStarkKey(
      starkKey
    );
  } catch (error) {
    throw new Error(JSON.stringify(error, null, 2));
  }

  console.log("Response:");
  console.log(JSON.stringify(assetsResponse, null, 2));
})();
