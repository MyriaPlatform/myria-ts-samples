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

  const starkKey: string = config.stark_key;
  const contractAddress: string = config.collection_contract_address;
  const metadataApiUrl: string = config.metadata_api_url;
  const royaltyRecipient: string = config.public_key;

  let bulkMintResult = [];
  try {
    console.log("Initiating a bulk minting...");
    for (let i = 1; i < 5; i++) {
      const params: MintERC721Params = {
        starkKey: starkKey,
        contractAddress: contractAddress,
        uri: `${metadataApiUrl}/${i}`,
        tokenId: i.toString(),
        description: "mry asset",
        fees: [
          {
            percentage: 2,
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
    console.log(`Bulk mint is completed. Minted ${bulkMintResult.length} assets...`);
  } catch (error) {
    throw new Error(JSON.stringify(error, null, 2));
  }
  // console.log(bulkMintResult);
})();
