import {
  GetMintedAssetsParams,
  GetMintedAssetsResponse,
  MintingManager
} from "myria-core-sdk";
import config from "../config";

(async (): Promise<void> => {
  const env = config.environment;
  const mintingManager: MintingManager = new MintingManager(env);
  const starkKey: string = config.stark_key;

  const params: GetMintedAssetsParams = {
    starkKey: starkKey,
  };

  console.log(
    `Retrieving a list of mint transactions with ${starkKey} stark key...`
  );
  const mintTransactionResponse: GetMintedAssetsResponse = await mintingManager.getMintedAssetByStarkKey(
    params
  );

  console.log("Mint transactions response:");
  console.log(JSON.stringify(mintTransactionResponse, null, 2));
})();
