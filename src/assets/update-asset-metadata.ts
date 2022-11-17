// work-in-progess
import { IMyriaClient, ModuleFactory, MyriaClient, UpdateAssetMetadataParams } from "myria-core-sdk";
import config from "../config";

(async (): Promise<void> => {
  const starkKey = config.stark_key;
  const env = config.environment;
  const assetId = 13287;
  const assetMintId = "13287";

  const iClient: IMyriaClient = {
    provider: null,
    networkId: null,
    web3: null,
    env: env
  };
  const mClient = new MyriaClient(iClient);
  const moduleFactory = new ModuleFactory(mClient);
  const assetManager = moduleFactory.getAssetOnchainManager();

  const asset = await assetManager.getAssetById(assetMintId);

  const params: UpdateAssetMetadataParams = {
    name: "test",
    animationUrl: asset.data.imageUrl,
    animationUrlMimeType: "application/vnd.apple.mpegurl",
    imageUrl: asset.data.imageUrl,
    attack: 1,
    collectable: true,
    god: "Odin",
    element: "Fire",
    product: 1,
    rarity: 1,
    type: 1
  }

  console.log(`Updating asset metadata...`);
  const assetsResponse = await assetManager.updateAssetMetadataByAssetId(
    assetId,
    params
  );
  console.log("Response:");
  console.log(JSON.stringify(assetsResponse, null, 2));
})();
