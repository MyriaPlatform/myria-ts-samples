import {
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

  let response: any;
  try {
    console.log("Creating the metadata schema...");
    response = await collectionManager.createCollectionMetadataByAddress(contractAddress, params);
  } catch (error) {
    throw new Error(JSON.stringify(error, null, 2));
  }

  console.log("Metadata schema response:");
  console.log(JSON.stringify(response, null, 2));
})();
