import {
  GetMintedTransactionParams,
  GetMintedTransactionResponse,
  MintingManager
} from "myria-core-sdk";
import config from "../config";

(async (): Promise<void> => {
  const env = config.environment;
  const mintingManager: MintingManager = new MintingManager(env);
  const transactionId: number = 39026;

  const params: GetMintedTransactionParams = {
    transactionId: transactionId,
  };

  console.log(
    `Retrieving details of the ${transactionId} mint transaction...`
  );
  const mintTransactionResponse: GetMintedTransactionResponse = await mintingManager.getMintTransactionList(
    params
  );

  console.log("Mint transaction response:");
  console.log(JSON.stringify(mintTransactionResponse, null, 2));
})();
