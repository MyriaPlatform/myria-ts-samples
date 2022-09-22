import {
  MintingManager,
  FeeType,
  BulkMintableERC721Params,
  MintAssetErc721Info
} from "myria-core-sdk";
import config from "../config";

(async (): Promise<void> => {
  const env = config.environment;
  const mintingManager: MintingManager = new MintingManager(env);

  const startTokenId = 36;
  const endTokenId = 36;
  const feePercentage = 2;

  const starkKey: string = config.stark_key;
  const contractAddress: string = config.collection_contract_address;
  const metadataApiUrl: string = config.metadata_api_url;
  const royaltyRecipient: string = config.public_key;

  const assetsToMint: MintAssetErc721Info[] = [];

  for (let i = startTokenId; i <= endTokenId; i++) {
    const asset: MintAssetErc721Info = {
      uri: `${metadataApiUrl}/${i}`,
      tokenId: String(i),
      description: "NFT",
      fees: [{
        percentage: feePercentage,
        receiptAddress: royaltyRecipient,
        feeType: FeeType.ROYALTY
      }]
    };
    assetsToMint.push(asset);
  }

  const mintERC721Params: BulkMintableERC721Params = {
    starkKey: starkKey,
    contractAddress: contractAddress,
    assets: assetsToMint,
    isSupportGetBulkMetadata: true,
    fees: [{
      percentage: feePercentage,
      receiptAddress: royaltyRecipient,
      feeType: FeeType.ROYALTY
    }]
  };

  try {
    console.log("Initiating a bulk minting...");
    const mintResult = await mintingManager.bulkMintableNftERC721(mintERC721Params);
    console.log("Bulk minting is completed.");
    console.log(mintResult);
  } catch (error) {
    console.log(error);
  }
})();
