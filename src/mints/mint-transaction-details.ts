import { MintingManager } from "myria-core-sdk/dist/cjs/src/modules";
import {
  GetMintedTransactionParams,
  GetMintedTransactionResponse,
} from "myria-core-sdk/dist/types/src/types/MintTypes";

(async (): Promise<void> => {
  const mintingManager: MintingManager = new MintingManager();
  const transactionId: number = 203;

  const params: GetMintedTransactionParams = {
    transactionId: transactionId,
  };

  let mintTransactionResponse: GetMintedTransactionResponse | undefined;
  try {
    console.log(
      `Retrieving details of the ${transactionId} mint transaction...`
    );
    mintTransactionResponse = await mintingManager.getMintTransactionList(
      params
    );
  } catch (error) {
    throw new Error(JSON.stringify(error, null, 2));
  }

  console.log("Mint transaction response:");
  console.log(JSON.stringify(mintTransactionResponse, null, 2));
})();
