import { IMyriaClient, ModuleFactory, MyriaClient, QueryEqualMetadataNftAssetParams } from "myria-core-sdk";
import config from "../config";

(async (): Promise<void> => {
  const env = config.environment;
  const assetId = 1861;

  const iClient: IMyriaClient = {
    provider: null,
    networkId: null,
    web3: null,
    env: env
  };
  const mClient = new MyriaClient(iClient);
  const moduleFactory = new ModuleFactory(mClient);
  const assetManager = moduleFactory.getAssetOnchainManager();

  const payload: QueryEqualMetadataNftAssetParams = {
    assetId: assetId
  }

  console.log(`Retrieving asset...`);
  const assetsResponse = await assetManager.getAssetEqualMetadataById(
    payload
  );

  console.log("Response:");
  console.log(JSON.stringify(assetsResponse, null, 2));
})();