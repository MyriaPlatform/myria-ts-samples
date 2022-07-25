import { Modules } from "myria-core-sdk";
import {
  CreateCollection,
  CreateCollectionResponse,
} from "myria-core-sdk/dist/types/src/types/CollectionTypes";
import config from "../config";

const name: string = "MT Collection";
const description: string = "MT original";
const contractAddress: string = config.collection_contract_address;
const metadataApiUrl: string = config.metadata_api_url;
const publicKey: string = config.user_public_key;
const projectId: number = config.project_id;
const starkKey: string = config.user_stark_key;

(async (): Promise<void> => {
  const collectionModule: Modules.CollectionModule =
    new Modules.CollectionModule();

  const newCollection: CreateCollection = {
    name: name,
    description: description,
    contractAddress: contractAddress,
    metadataApiUrl: metadataApiUrl,
    ownerPublicKey: publicKey,
    projectId: projectId,
    starkKey: starkKey,
  };

  let collectionResponse: CreateCollectionResponse | undefined;
  try {
    console.log("Creating the collection...");
    collectionResponse = await collectionModule.createCollection(newCollection);
  } catch (error) {
    throw new Error(JSON.stringify(error, null, 2));
  }

  console.log("Created collection response:");
  console.log(collectionResponse);
})();
