import { EnvTypes, GameBurnNftParams, GameTransactionManager, INativeMyriaClient, NativeMyriaClient, TokenInfo, TokenType } from "myria-core-sdk";

(async (): Promise<void> => {

  const imyriaClient: INativeMyriaClient = {
      networkId: 11155111,
      env: EnvTypes.STAGING
  }
  const myriaClient = new NativeMyriaClient(imyriaClient);
  const gameTransactionManager = new GameTransactionManager(myriaClient);


  console.log(`Execute burn NFT...`);

  const burnedTokenInfo: TokenInfo = {
      tokenType: TokenType.MINTABLE_ERC721,
      tokenAddress: "0xa71ace98a45aaaf2d310928f97ad82ff883b903f",
      tokenId: "28"
  };
  const params: GameBurnNftParams = {
      sourceWalletSignature: "0xda675d7cd652b075bc8edc79f0533d6c89dcaed14f9e44a997feac8ce11c9ac87b8ec8cdb7b83be16b5785d41aba965061ce41e91d448226ff7d674cc0a8203f1b",
      sourceWalletAddress: "0x724f337bf0fa934db9aa3ec6dea49b03c54ad3cc",
      burnTokens: [burnedTokenInfo],
      groupRequestId: "group-req-id-1-burn-nft",
      partnerRefId: "partner-ref-id-1-burn-nft"
  };
  const response = await gameTransactionManager.burnNfts(params);

  console.log("Response burn NFTs:");
  console.log(JSON.stringify(response, null, 2));
})();
