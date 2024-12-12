import {
  MintingManager,
  MintERC721Params,
  MintERC721Response,
  FeeType
} from "myria-core-sdk";
import config from "../config";

(async (): Promise<void> => {
  const env = config.environment;
  const mintingManager: MintingManager = new MintingManager(env);

  const feePercentage = 2;

  const starkKey: string = config.stark_key;
  const contractAddress: string = config.collection_contract_address;
  const tokenUri: string = config.token_uri;
  const tokenId: string = config.token_id;
  const royaltyRecipient: string = config.public_key;

  const params: MintERC721Params = {
    starkKey: starkKey,
    contractAddress: contractAddress,
    uri: tokenUri,
    tokenId: tokenId,
    description: "sample description",
    fees: [
      {
        percentage: feePercentage,
        receiptAddress: royaltyRecipient,
        feeType: FeeType.ROYALTY
      },
    ],
    requestId: "",
    partnerRefId: "",
    requestDescription: ""
  };

  console.log("Initiating a mint transaction...");
  const mintTransactionResponse: MintERC721Response = await mintingManager.createMintTransactionERC721(
    params
  );
  
  console.log("Mint transaction response:");
  console.log(JSON.stringify(mintTransactionResponse, null, 2));
})();
