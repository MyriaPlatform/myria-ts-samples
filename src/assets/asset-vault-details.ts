import { IMyriaClient, ModuleFactory, MyriaClient } from "myria-core-sdk";
import config from "../config";

(async (): Promise<void> => {
  const env = config.environment;
  const starkKey = config.stark_key;
  const assetId = "0x400d7f08c2bd93fded45000d55f20a1eb52a8d90c6912a1315533179219937c";

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
    console.log(`Retrieving vault details...`);
    assetsResponse = await assetManager.getAssetVaultDetails(
      starkKey, assetId
    );
  } catch (error) {
    throw new Error(JSON.stringify(error, null, 2));
  }

  console.log("Requested response:");
  console.log(JSON.stringify(assetsResponse, null, 2));
})();
