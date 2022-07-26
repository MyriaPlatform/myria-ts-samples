import { Modules } from "myria-core-sdk";
import {
  GetMintedTransactionParams,
  GetMintedTransactionResponse,
} from "myria-core-sdk/dist/cjs/src/types/MintedTransactionTypes";

(async (): Promise<void> => {
  const mintedModule = new Modules.MintedModule();
  const transactionId: number = 203;

  const params: GetMintedTransactionParams = {
    transactionId: transactionId,
  };

  let mintTransactionResponse: GetMintedTransactionResponse | undefined;
  try {
    console.log(`Retrieving details of the ${transactionId} mint transaction...`);
    mintTransactionResponse = await mintedModule.getMintTransactionList(params);
  } catch (error) {
    throw new Error(JSON.stringify(error, null, 2));
  }

  console.log("Mint transaction response:");
  console.log(JSON.stringify(mintTransactionResponse, null, 2));
})();
