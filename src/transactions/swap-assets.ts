import { ActionBy, EnvTypes, GameTransactionManager, GameTransactionParams, INativeMyriaClient, NativeMyriaClient, TokenType, TransferredAssets } from "myria-core-sdk";
import config from "../config";

(async (): Promise<void> => {

  const imyriaClient: INativeMyriaClient = {
      networkId: 11155111,
      env: EnvTypes.STAGING
  }
  const myriaClient = new NativeMyriaClient(imyriaClient);
  const gameTransactionManager = new GameTransactionManager(myriaClient);
  console.log(`Get transactions by partner ref id...`);
  const partnerRefId = "Test-partner-ref-id-swap-1";
  const groupRequestId = "Test-group-ref-id-swap-1";
  const requestId = "b055e655-d77e-4c5c-bdfb-06d29dca1f32";

  const burnedAssets: TransferredAssets = {
      data: [{
        tokenType: TokenType.MINTABLE_ERC721,
        tokenAddress: "0x83a795E1E91560Aae4207fDae9199d384f11D9d2",
        tokenId: "1",
      }]
  }
  const userBurnMessage = await gameTransactionManager.buildBurnTransactionMessage(burnedAssets);
  console.log("User Burn Message:", userBurnMessage);

  const userWalletSignature = "0xda675d7cd652b075bc8edc79f0533d6c89dcaed14f9e44a997feac8ce11c9ac87b8ec8cdb7b83be16b5785d41aba965061ce41e91d448226ff7d674cc0a8203f1b";
  const userBurnSignatureBurn = ""; // Client provider personal.sign(userBurnMessage);
  const userWalletAddress = "0x724f337bF0Fa934dB9aa3ec6dEa49B03c54AD3cc";

  const swapParams: GameTransactionParams = {
      userWalletSignature,
      userBurnSignature: userBurnSignatureBurn,
      userWalletAddress,
      developerApiKey: "Retrieve via developer portal",
      developerWalletAddress: "Treasury developer wallet address",
      developerPrivateStarkKey: "Retrieve Stark Private Key via Developer Portal",
      partnerRefId: partnerRefId,
      groupRequestId,
      requestId,
      ownerBurn: ActionBy.EndUser,
      ownerTransfer: ActionBy.Developer
  }
  const response = await gameTransactionManager.swapAssets(swapParams)

  console.log("Response Transactions of Partner Ref ID:");
  console.log(JSON.stringify(response, null, 2));
})();
