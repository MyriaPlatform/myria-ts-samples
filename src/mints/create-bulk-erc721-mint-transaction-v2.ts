import {
  MintingManager,
  FeeType,
  MintAssetErc721Info,
  BulkMintERC721Params,
  BulkMintERC721ResponseData,
} from "myria-core-sdk";
import config from "../config";

(async (): Promise<void> => {
  const env = config.environment;
  const mintingManager: MintingManager = new MintingManager(env);

  const feePercentage = 3;
  // const startTokenId = 31;
  // const endTokenId = 32;

  // This is the token range you want to mint (from - to) example to mint 10 tokens
  // There are two version of minting, for bulk-mint, it's recommend to use v2.
  // Use the command defined on package json and trigger mint
  // After you done with the mint, can access to the developer portal page and access to assets page under 
  // specific collection for checking
  // There are no failed mint means all of yours NFTs/assets have been minted successfully
  const startTokenId = 201;
  const endTokenId = 215;

  const starkKey: string = config.stark_key;
  const contractAddress: string = config.collection_contract_address;
  const metadataApiUrl: string = config.metadata_api_url;
  const royaltyRecipient: string = config.public_key;

  let assetsToMint = [];

  console.log("Preparing assets to mint...");
  for (let i = startTokenId; i <= endTokenId; i++) {
    const asset: MintAssetErc721Info = {
      tokenId: String(i),
      description: 'mry asset for game',
    };
    assetsToMint.push(asset);
  }
  console.log(assetsToMint);

  const params: BulkMintERC721Params = {
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

  console.log(JSON.stringify(params));
  console.log("Initiating a bulk minting...");
  const mintResult: BulkMintERC721ResponseData = await mintingManager.bulkMintNfts(params);
  console.log("Bulk minting is completed. Result: ", JSON.stringify(mintResult));
})();