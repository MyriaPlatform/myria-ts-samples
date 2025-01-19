import { EnvTypes, GameTransactionManager, GameTransferERC20Params, GameTransferNftParams, INativeMyriaClient, NativeMyriaClient } from "myria-core-sdk";
import config from "../config";

(async (): Promise<void> => {

  const imyriaClient: INativeMyriaClient = {
      networkId: 11155111,
      env: EnvTypes.STAGING
  }
  const myriaClient = new NativeMyriaClient(imyriaClient);
  const gameTransactionManager = new GameTransactionManager(myriaClient);
  console.log(`Retrieving user balance...`);
  const params: GameTransferNftParams = {
      senderPrivateKey: "5e8bb91a83e938fd890b7fb1b930067bdc731935b2148613f727ff71ab1d7ed",
      sourceWalletAddress: "0x724f337bF0Fa934dB9aa3ec6dEa49B03c54AD3cc",
      destinationWalletAddress: "0xd0D8A467Eb8526C2AF030C18C64A664A5e1aF34A",
      tokenAddress: "0xa71ace98a45aaaf2d310928f97ad82ff883b903f",
      tokenId: "6",
      requestId: "05503d22-678e-4658-84f6-b85e386e1eb6",
      groupRequestId: "Test-group-req-id-1",
      partnerRefId: "Test-partner-ref-id-1",
      description: "Test-description-1"
  };
  const response = await gameTransactionManager.transferNfts(params);

  console.log("Response transfer NFTs:");
  console.log(JSON.stringify(response, null, 2));
})();
