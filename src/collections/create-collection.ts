import { CollectionManager } from "myria-core-sdk/dist/cjs/src/modules/CollectionManager";
import {
  CreateCollectionParams,
  CreateCollectionResponse,
} from "myria-core-sdk/dist/types/src/types/CollectionTypes";
import config from "../config";

(async (): Promise<void> => {
  const collectionManager: CollectionManager = new CollectionManager();

  const contractAddress: string = config.collection_contract_address;
  const metadataApiUrl: string = config.metadata_api_url;
  const publicKey: string = config.public_key;
  const projectId: number = config.project_id;
  const starkKey: string = config.stark_key;

  const params: CreateCollectionParams = {
    name: "COLLECTION_NAME",
    description: "COLLECTION_DESCRIPTION",
    contractAddress: contractAddress,
    metadataApiUrl: metadataApiUrl,
    ownerPublicKey: publicKey,
    projectId: projectId,
    starkKey: starkKey,
  };

  let collectionResponse: CreateCollectionResponse | undefined;
  try {
    console.log("Creating the collection...");
    collectionResponse = await collectionManager.createCollection(params);
  } catch (error) {
    throw new Error(JSON.stringify(error, null, 2));
  }

  console.log("Created collection response:");
  console.log(JSON.stringify(collectionResponse, null, 2));
})();
