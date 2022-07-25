import { Modules } from "myria-core-sdk";
import {
  GetMintedTransactionParams,
  GetMintedTransactionResponse,
} from "myria-core-sdk/dist/cjs/src/types/MintedTransactionTypes";

const id: number = 203;

(async (): Promise<void> => {
  const mintedModule = new Modules.MintedModule();

  const params: GetMintedTransactionParams = {
    transactionId: id,
  };

  let mintTransactionResponse: GetMintedTransactionResponse | undefined;
  try {
    console.log(`Retrieving details of the ${id} mint transaction...`);
    mintTransactionResponse = await mintedModule.getMintTransactionList(params);
  } catch (error) {
    throw new Error(JSON.stringify(error, null, 2));
  }

  console.log("Mint transaction response:");
  console.log(JSON.stringify(mintTransactionResponse, null, 2));
})();
