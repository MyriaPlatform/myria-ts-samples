import { Modules } from "myria-core-sdk";
import { MintedTransactionERC721Request } from "myria-core-sdk/dist/cjs/src/types/MintedTransactionTypes";
import { MintedTransactionERC721Response } from "myria-core-sdk/dist/types/src/types/MintedTransactionTypes";
import config from "../config";

const starkKey: string = config.user_stark_key;
const contractAddress: string = config.collection_contract_address;
const tokenUri: string = config.token_uri;
const royaltyRecipient: string = config.user_public_key;
const tokenId: string = "1";
const description: string = "MT NFT 05";

(async (): Promise<void> => {
  const mintedModule = new Modules.MintedModule();

  const params: MintedTransactionERC721Request = {
    starkKey: starkKey,
    contractAddress: contractAddress,
    uri: tokenUri,
    tokenId: tokenId,
    description: description,
    royalties: [
      {
        percentage: 10,
        receiptAddress: royaltyRecipient,
      },
    ],
  };

  let mintTransactionResponse: MintedTransactionERC721Response | undefined;
  try {
    console.log("Initiating a mint transaction...");
    mintTransactionResponse = await mintedModule.createMintTransactionERC721(
      params
    );
  } catch (error) {
    throw new Error(JSON.stringify(error, null, 2));
  }

  console.log("Mint transaction response:");
  console.log(JSON.stringify(mintTransactionResponse, null, 2));
})();
