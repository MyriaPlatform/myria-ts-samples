import { EnvTypes, GameTransactionManager, GameTransferERC20Params, GameTransferNftParams, INativeMyriaClient, NativeMyriaClient } from "myria-core-sdk";
import config from "../config";

(async (): Promise<void> => {

  const imyriaClient: INativeMyriaClient = {
      networkId: 11155111,
      env: EnvTypes.STAGING
  }
  const myriaClient = new NativeMyriaClient(imyriaClient);
  const gameTransactionManager = new GameTransactionManager(myriaClient);
  console.log(`Get transaction details...`);
  const transactionId = 965844;
  const response = await gameTransactionManager.getTransactionDetailsByID(transactionId);

  console.log("Response Transaction Details:");
  console.log(JSON.stringify(response, null, 2));
})();
