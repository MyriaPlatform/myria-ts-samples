import {
  BulkMintAsyncParams,
  BulkMintERC721AsyncResponseData,
  EnvTypes,
  FeeType,
  MintAssetErc721InfoAsync,
  MintedAssetResponse,
  MintingManager,
} from "myria-core-sdk";
import { v4 as uuid } from "uuid";
const fs = require("fs");
import config from "../config";

(async () => {
  const mintingManager: MintingManager = new MintingManager(EnvTypes.STAGING);

  const feePercentage = 2;
  const startTokenId = 1010;
  const endTokenId = 1011;

//   const requestId: string = '0384bc05-a895-4965-8a13-87968412f8f7';
  const requestId: string = uuid();
  const partnerRefId: string = "partnerRefId";
  const groupRequestId: string = requestId;
  const requestDescription: string = "Description request";
  const accountId: string = config.accountId;
  const collectionId: number = 920;
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
      mintForStarkKey:
        i === startTokenId
          ? "0x606ee35b4c52bcec9906a456c339b628b8d56f0ce6edc8d00a9d5e67922efc4"
          : undefined,
      trackingId: "123",
    };
    assetsToMintAsync.push(asset);
  }
  console.log(assetsToMintAsync);

  const params: BulkMintAsyncParams = {
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

  console.log("Initiating a bulk minting...");
  try {
    const mintAsyncResult: BulkMintERC721AsyncResponseData =
      await mintingManager.bulkMintNftsAsync(params);
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
          requestDescription: requestDescription,
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

    fs.writeFile(
      `Bulk_Mint_${groupRequestId}_${new Date().getTime()}.json`,
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
