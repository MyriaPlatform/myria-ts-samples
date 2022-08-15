import { MintingManager } from "myria-core-sdk/dist/cjs/src/modules";
import { MintERC721Params, MintERC721Response } from "myria-core-sdk/dist/types/src/types/MintTypes";
import config from "../config";

(async (): Promise<void> => {
  const mintingManager: MintingManager = new MintingManager();

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
    description: "MINTED_ASSET_DESCRIPTION",
    royalties: [
      {
        percentage: 2,
        receiptAddress: royaltyRecipient,
      },
    ],
  };

  let mintTransactionResponse: MintERC721Response | undefined;
  try {
    console.log("Initiating a mint transaction...");
    mintTransactionResponse = await mintingManager.createMintTransactionERC721(
      params
    );
  } catch (error) {
    throw new Error(JSON.stringify(error, null, 2));
  }

  console.log("Mint transaction response:");
  console.log(JSON.stringify(mintTransactionResponse, null, 2));
})();
