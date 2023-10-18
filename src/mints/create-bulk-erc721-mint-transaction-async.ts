import {
  BulkMintQueueAsyncParams,
  BulkMintQueueAsyncResponseData,
  EnvTypes,
  FeeType,
  MintAssetErc721InfoAsync,
  MintedAssetResponse,
  MintingManager,
} from "myria-core-sdk";
import { v4 as uuid } from "uuid";
const fs = require("fs");
const path = require("path");
import config from "../config";

(async () => {
  const mintingManager: MintingManager = new MintingManager(EnvTypes.STAGING);

  const feePercentage = 2;
  const startTokenId = 1035;
  const endTokenId = 1135;

  const requestId: string = uuid();
  const partnerRefId: string = String(config.project_id);      // Project Id
  const groupRequestId: string = requestId;
  const requestDescription: string = "Description request";    //Whatever string
  const accountId: string = config.accountId;
  const collectionId: number = Number(config.collectionId);
  const isSupportGetBulkMetadata = true;
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
      //   mintForStarkKey: "destinate receiver / player of games"
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

  console.log("Initiating a bulk minting...");
  try {
    const mintAsyncResult: BulkMintQueueAsyncResponseData = await mintingManager.bulkMintNftsQueueAsync(params);
    console.log("Bulk minting is completed. Result: ", mintAsyncResult);

    const mintData = mintAsyncResult.validItems.map(
      (validItem: MintedAssetResponse, index: number) => {
        return {
          assetId: validItem.id,
          name: validItem.name,
          receiverStarkKey: validItem.starkKey,
          creatorStarkKey: validItem.creatorStarkKey,
          tokenAddress: validItem.tokenAddress,
          tokenId: validItem.tokenId,
          collectionId: validItem.collectionId,
          requestDescription,
        };
      }
    );
    const invalidMintData = mintAsyncResult.invalidItems.map(
      (inValidItem: any, index: number) => {
        return {
          tokenId: inValidItem?.id,
          tokenAddress: inValidItem?.tokenAddress,
          reason: inValidItem?.reason,
        };
      }
    );
    const jsonData = {
      requestId: mintAsyncResult.requestId,
      groupRequestId: mintAsyncResult.groupRequestId,
      partnerRefId: partnerRefId,
      mint_data: mintData,
      invalid_mint_data: invalidMintData,
    };
    const jsonContent = JSON.stringify(jsonData);

    fs.writeFileSync(
      path.join(
        __dirname,
        "../../mint-response",
        `Bulk_Mint_${groupRequestId}_${new Date().getTime()}.json`
      ),
      jsonContent,
      "utf8",
      function (err: any) {
        if (err) {
          console.log("An error occured while writing JSON Object to File.");
          return console.log(err);
        }

        console.log("JSON file has been saved.");
      }
    );
  } catch (error) {
    console.log("Mint failed: ", error);
  }
})();
