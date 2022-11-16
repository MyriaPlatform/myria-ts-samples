import {
  CollectionDetailsResponseData,
  CollectionManager,
  CreateCollectionMetadataParams,
  Metadata
} from "myria-core-sdk";
import config from "../config";

(async (): Promise<void> => {
  const env = config.environment;
  const collectionManager: CollectionManager = new CollectionManager(env);

  const contractAddress: string = config.collection_contract_address;
  const starkKey: string = config.stark_key;

  const metadataSchema: Metadata[] = [
    {
      name: "ATTRIBUTE_NAME_1",
      type: "enum",
      filterable: true
    },
    {
      name: "ATTRIBUTE_NAME_N",
      type: "enum",
      filterable: true
    }
  ];

  const params: CreateCollectionMetadataParams = {
    metadata: metadataSchema,
    starkKey: starkKey
  };

  console.log("Creating the metadata schema...");
  const response: CollectionDetailsResponseData = await collectionManager.createCollectionMetadataByAddress(contractAddress, params);

  console.log("Metadata schema response:");
  console.log(JSON.stringify(response, null, 2));
})();