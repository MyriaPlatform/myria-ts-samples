import {
  MintingManager,
  FeeType,
  MintAssetErc721Info,
  BulkMintableERC721Params,
  BlukMintableERC721ResponseData
} from "myria-core-sdk";
import config from "../config";

(async (): Promise<void> => {
  const env = config.environment;
  const mintingManager: MintingManager = new MintingManager(env);

  const feePercentage = 2;
  const startTokenId = 31;
  const endTokenId = 33;

  const starkKey: string = config.stark_key;
  const contractAddress: string = config.collection_contract_address;
  const metadataApiUrl: string = config.metadata_api_url;
  const royaltyRecipient: string = config.public_key;

  let assetsToMint = [];

  console.log("Preparing assets to mint...");
  for (let i = startTokenId; i <= endTokenId; i++) {
    const asset: MintAssetErc721Info = {
      uri: `${metadataApiUrl}/${i}`,
      tokenId: String(i),
      description: 'mry asset',
      fees: [{
        percentage: feePercentage,
        receiptAddress: royaltyRecipient,
        feeType: FeeType.ROYALTY
      }]
    };
    assetsToMint.push(asset);
  }
  console.log(assetsToMint);

  const params: BulkMintableERC721Params = {
    starkKey: starkKey,
    contractAddress: contractAddress,
    assets: assetsToMint,
    isSupportGetBulkMetadata: true,
    fees: [{
      percentage: 10,
      receiptAddress: royaltyRecipient,
      feeType: FeeType.ROYALTY
    }]
  };
  try {
    console.log("Initiating a bulk minting...");
    const mintResult: BlukMintableERC721ResponseData = await mintingManager.bulkMintableNftERC721(params);
    console.log("Bulk minting is completed. Result: ", mintResult);
  } catch (error) {
    console.log(error);
  }
})();