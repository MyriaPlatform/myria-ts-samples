import {
  CollectionDetailsResponseData,
  CollectionManager,
  CreateCollectionMetadataParams,
} from "myria-core-sdk";
import config from "../config";

(async (): Promise<void> => {
  const env = config.environment;
  const collectionManager: CollectionManager = new CollectionManager(env);

  const contractAddress: string = config.collection_contract_address;
  const starkKey: string = config.stark_key;

  // Example of metadata schema
  const metadataSchema = [
    {
      name: "alliance",
      type: "string",
      filterable: true
    },
    {
      name: "rarity",
      type: "string",
      filterable: true
    },
    {
      name: "type",
      type: "string",
      filterable: true
    },
    {
      name: "description",
      type: "string",
      filterable: true
    },
    {
      name: "name",
      type: "string",
      filterable: true
    }

  ];

  const params: CreateCollectionMetadataParams = {
    metadata: metadataSchema,
    starkKey: starkKey
  };

  console.log("Creating the metadata schema...");
  const response = await collectionManager.createCollectionMetadataByAddress(contractAddress, params);

  console.log("Metadata schema response:");
  console.log(JSON.stringify(response, null, 2));
})();