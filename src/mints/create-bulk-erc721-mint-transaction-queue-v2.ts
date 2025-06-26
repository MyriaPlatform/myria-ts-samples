import {
  BulkMintERC721ResponseData,
  BulkMintQueueAsyncParams,
  EnvTypes,
  FeeType,
  MintAssetErc721InfoAsync,
  MintingManager,
} from "myria-core-sdk";
import { uuid } from "uuidv4";
import config from "../config";

(async (): Promise<void> => {
  const env = config.environment;

  const mintingManager: MintingManager = new MintingManager(EnvTypes.STAGING);

  const feePercentage = 3;
  const startTokenId = 267;
  const endTokenId = 280;

  const requestId: string = '28668645-0119-46d3-a9a0-20db4a1e09f7';
  const partnerRefId: string = String(config.project_id);      // Project Id
  const groupRequestId: string = requestId;
  const requestDescription: string = "Description request game X";    //Whatever string
  const accountId: string = config.accountId;
  const collectionId: number = Number(config.collectionId);
  const isSupportGetBulkMetadata = false;
  const royaltyRecipient: string = config.public_key;
  const apiKey = config.apiKey;

  let assetsToMintAsync = [];

  console.log("Preparing assets to mint...");
  for (let i = startTokenId; i <= endTokenId; i++) {
    const asset: MintAssetErc721InfoAsync = {
      tokenId: String(i),
      description: "mry asset",
      fees: [
        {
          percentage: feePercentage,
          receiptAddress: royaltyRecipient,
          feeType: FeeType.ROYALTY,
        },
      ],
      // mintForStarkKey: "0xbedeee64ca182867d1f1bbab1e6340143e200e282d8610ce138eb80d82a0da",
      mintForStarkKey: "0x26a4d713a25dc6a91fe17a4684ae61fe157c890edb7ab3c89e7769b2ae2f035",
      trackingId: "123", //Whatever string that Partner/Developer want to add for minted assets
    };
    assetsToMintAsync.push(asset);
  }
  console.log(assetsToMintAsync);

  const params: BulkMintQueueAsyncParams = {
    apiKey,
    requestId,
    partnerRefId,
    groupRequestId,
    requestDescription,
    accountId,
    collectionId,
    assets: assetsToMintAsync,
    isSupportGetBulkMetadata,
    fees: [
      {
        percentage: feePercentage,
        receiptAddress: royaltyRecipient,
        feeType: FeeType.ROYALTY,
      },
    ],
  };

  console.log('SDK Payload -> ', JSON.stringify(params));

  console.log(JSON.stringify(params));
  console.log("Initiating a bulk minting...");
  const mintResult: BulkMintERC721ResponseData = await mintingManager.bulkMintNftsV2(params);
  console.log("Bulk minting is completed. Result: ", JSON.stringify(mintResult));
  console.log("Minted assets : ", JSON.stringify(mintResult.mintedAssets));
  console.log("failedMintingAsset assets : ", JSON.stringify(mintResult.failedMintingAsset));
})();