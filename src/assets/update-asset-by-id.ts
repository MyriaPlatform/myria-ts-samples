// work-in-progess
import { IMyriaClient, ModuleFactory, MyriaClient, UpdatedAssetParams } from "myria-core-sdk";
import config from "../config";

(async (): Promise<void> => {
  const starkKey = config.stark_key;
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

  const asset = await assetManager.getAssetById(assetId);

  const params: UpdatedAssetParams = {
    starkKey: starkKey,
    uri: asset.data.uri,
    assetType: asset.data.assetType,
    tokenId: asset.data.tokenId,
    tokenAddress: asset.data.tokenAddress,
    status: asset.data.status,
    imageUrl: asset.data.imageUrl,
    animationUrl: asset.data.animationUrl,
    animationUrlMimeType: asset.data.animationUrlMimeType,
    collectionId: asset.data.collectionId,
    name: "Troll Assassin Special",
    description: "A special puzzle of Troll Assassin"
  }

  console.log(`Updating asset...`);
  const assetsResponse = await assetManager.updateAssetById(
    assetId,
    params
  );
  console.log("Response:");
  console.log(JSON.stringify(assetsResponse, null, 2));
})();
