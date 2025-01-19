import { EnvTypes, GameTransactionManager, INativeMyriaClient, NativeMyriaClient } from "myria-core-sdk";
import config from "../config";

(async (): Promise<void> => {

  const imyriaClient: INativeMyriaClient = {
      networkId: 11155111,
      env: EnvTypes.STAGING
  }
  const myriaClient = new NativeMyriaClient(imyriaClient);
  const gameTransactionManager = new GameTransactionManager(myriaClient);
  console.log(`Get transactions by group request id and partner ref id...`);
  const partnerRefId = "Test-partner-ref-id-1";
  const groupRequestId = "Test-group-req-id-1";
  const response = await gameTransactionManager.getTransactionsByGroupRequestIDAndPartnerRefID(
    groupRequestId,
    partnerRefId
  )

  console.log("Response Transactions by group Req ID & Partner Ref ID:");
  console.log(JSON.stringify(response, null, 2));
})();
