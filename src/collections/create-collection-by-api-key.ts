import {
  CollectionManager,
  CreateCollectionByApiKeyParams,
  CreateCollectionResponse
} from "myria-core-sdk";
import config from "../config";

(async (): Promise<void> => {
  const env = config.environment;
  const collectionManager: CollectionManager = new CollectionManager(env);

  const contractAddress: string = config.collection_contract_address;
  const metadataApiUrl: string = config.metadata_api_url;
  const publicKey: string = config.public_key;
  const projectId: number = config.project_id;

  const params: CreateCollectionByApiKeyParams = {
      name: "COLLECTION_NAME",
      description: "COLLECTION_DESCRIPTION",
      contractAddress: contractAddress,
      metadataApiUrl: metadataApiUrl,
      ownerPublicKey: publicKey,
      projectId: projectId,
      accountId: "",
      apiKey: ""
  };

  console.log("Creating the collection...");
  const collectionResponse: CreateCollectionResponse = await collectionManager.createCollectionByApiKey(params)

  console.log("Created collection response:");
  console.log(JSON.stringify(collectionResponse, null, 2));
})();
