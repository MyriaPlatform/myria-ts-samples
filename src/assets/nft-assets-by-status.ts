import { AssetOrderBy, IMyriaClient, ModuleFactory, MyriaClient, OrderStatus, OrderType, QueryAssetParams } from "myria-core-sdk";
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

  const params: QueryAssetParams = {
    orderType: OrderType.SELL,
    status: OrderStatus.ACTIVE,
    sortingField: "amountSell",
    orderBy: AssetOrderBy.ASC
  }

  console.log(`Retrieving assets...`);
  const assetsResponse = await assetManager.getNftAssetsByStatus(
    params
  );

  console.log("Response:");
  console.log(JSON.stringify(assetsResponse, null, 2));
})();
