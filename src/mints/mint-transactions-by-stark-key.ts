import {
  GetMintedAssetsParams,
  GetMintedAssetsResponse,
} from "myria-core-sdk/dist/cjs/src/types/MintTypes";
import { MintingManager } from "myria-core-sdk/dist/cjs/src/modules";
import config from "../config";

(async (): Promise<void> => {
  const mintingManager: MintingManager = new MintingManager();
  const starkKey: string = config.stark_key;

  const params: GetMintedAssetsParams = {
    starkKey: starkKey,
  };

  let mintTransactionResponse: GetMintedAssetsResponse | undefined;
  try {
    console.log(
      `Retrieving a list of mint transactions with ${starkKey} stark key...`
    );
    mintTransactionResponse = await mintingManager.getMintedAssetByStarkKey(
      params
    );
  } catch (error) {
    throw new Error(JSON.stringify(error, null, 2));
  }

  console.log("Mint transactions response:");
  console.log(JSON.stringify(mintTransactionResponse, null, 2));
})();
