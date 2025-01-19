import { EnvTypes, GameTransactionManager, GameTransferERC20Params, INativeMyriaClient, NativeMyriaClient } from "myria-core-sdk";
import config from "../config";

(async (): Promise<void> => {

  const imyriaClient: INativeMyriaClient = {
      networkId: 11155111,
      env: EnvTypes.STAGING
  }
  const myriaClient = new NativeMyriaClient(imyriaClient);
  const gameTransactionManager = new GameTransactionManager(myriaClient);
  console.log(`Transfer ERC20 tokens...`);
  const params: GameTransferERC20Params = {
      tokenAddress: "0x83a795E1E91560Aae4207fDae9199d384f11D9d2",
      amount: "1",
      sourceWalletSignature: "0x35e44fe1eb569df7238b11bd754d4cd6797762ef3eac3258fd162910ce262d0a65f97f2941a88458ff9c24bc4e501e9258d6c20e367287b54bb21e6e7835f3c71c",
      sourceWalletAddress: "0xd0d8a467eb8526c2af030c18c64a664a5e1af34a",
      destinationWalletAddress: "0x724f337bF0Fa934dB9aa3ec6dEa49B03c54AD3cc",
      requestId: "1253dac4-dae2-4234-aa52-e4679f520002",
      groupRequestId: "Test-group-req-id-1",
      partnerRefId: "Test-partner-ref-id-1",
      description: "Test-description-1"
  };
  const response = await gameTransactionManager.transferERC20Tokens(params);

  console.log("Response transfer erc20:");
  console.log(JSON.stringify(response, null, 2));
})();
