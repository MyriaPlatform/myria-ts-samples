import { IMyriaClient, ModuleFactory, MyriaClient } from "myria-core-sdk";
import config from "../config";

(async (): Promise<void> => {
  const env = config.environment;
  const starkKey = config.stark_key;
  const assetId = "0x400663ffc30c382646de8ba441bef0432e915d25d645911c3d76b819bdca0cf";

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

  console.log("Response:");
  console.log(JSON.stringify(assetsResponse, null, 2));
})();
