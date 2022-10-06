import {
  MintingManager,
  MintERC721Params,
  FeeType
} from "myria-core-sdk";
import config from "../config";

(async (): Promise<void> => {
  const timer = (ms: any) => new Promise(res => setTimeout(res, ms));

  const env = config.environment;
  const mintingManager: MintingManager = new MintingManager(env);
  
  const feePercentage = 2;
  const startTokenId = 11;
  const endTokenId = 14;

  const starkKey: string = config.stark_key;
  const contractAddress: string = config.collection_contract_address;
  const metadataApiUrl: string = config.metadata_api_url;
  const royaltyRecipient: string = config.public_key;

  let bulkMintResult = [];
  try {
    console.log("Initiating a bulk minting...");
    for (let i = startTokenId; i < endTokenId; i++) {
      const params: MintERC721Params = {
        starkKey: starkKey,
        contractAddress: contractAddress,
        uri: `${metadataApiUrl}/${i}`,
        tokenId: String(i),
        description: "mry asset",
        fees: [
          {
            percentage: feePercentage,
            receiptAddress: royaltyRecipient,
            feeType: FeeType.ROYALTY
          },
        ],
      };
      const mintTransactionResponse = await mintingManager.createMintTransactionERC721(
        params
      );
      if(mintTransactionResponse) {
        console.log(`Minted asset #${i}`);
        bulkMintResult.push(mintTransactionResponse);
      }
      await timer(2000);
    }
    console.log(`Bulk minting is completed. Minted ${bulkMintResult.length} assets...`);
    // console.log(bulkMintResult);
  } catch (error) {
    console.log(error);
  }
})();