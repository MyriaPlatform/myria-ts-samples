import { EnvTypes, GameTransactionManager, INativeMyriaClient, NativeMyriaClient } from "myria-core-sdk";
import config from "../config";

(async (): Promise<void> => {

  const imyriaClient: INativeMyriaClient = {
      networkId: 11155111,
      env: EnvTypes.STAGING
  }
  const myriaClient = new NativeMyriaClient(imyriaClient);
  const gameTransactionManager = new GameTransactionManager(myriaClient);
  console.log(`Get transactions by partner ref id...`);
  const partnerRefId = "Test-partner-ref-id-1";
  const response = await gameTransactionManager.getTransactionsByPartnerRefID(partnerRefId);

  console.log("Response Transactions of Partner Ref ID:");
  console.log(JSON.stringify(response, null, 2));
})();
