import { Modules } from "myria-core-sdk";
import {
  GetMintedStarkKeyParams,
  GetMintedStarkKeyResponse,
} from "myria-core-sdk/dist/cjs/src/types/MintedTransactionTypes";
import config from "../config";

(async (): Promise<void> => {
  const mintedModule = new Modules.MintedModule();
  const starkKey: string = config.user_stark_key;

  const params: GetMintedStarkKeyParams = {
    starkKey: starkKey,
  };

  let mintTransactionResponse: GetMintedStarkKeyResponse | undefined;
  try {
    console.log(
      `Retrieving a list of mint transactions with ${starkKey} stark key...`
    );
    mintTransactionResponse = await mintedModule.getMintStarkKey(params);
  } catch (error) {
    throw new Error(JSON.stringify(error, null, 2));
  }

  console.log("Mint transactions response:");
  console.log(JSON.stringify(mintTransactionResponse, null, 2));
})();
