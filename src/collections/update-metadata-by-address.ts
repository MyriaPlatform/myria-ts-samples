// WIP
import {
  CollectionDetailsResponseData,
  CollectionManager,
  UpdateCollectionParams
} from "myria-core-sdk";
import config from "../config";

(async (): Promise<void> => {
  const env = config.environment;
  const collectionManager: CollectionManager = new CollectionManager(env);

  const contractAddress: string = config.collection_contract_address;
  const starkKey: string = config.stark_key;

  const payload: UpdateCollectionParams = {
    name: "Raceeee",
    type: "enum",
    filterable: false,
    starkKey: starkKey
  }

  console.log("Updating the metadata schema...");
  const response: CollectionDetailsResponseData = await collectionManager.updateCollectionMetadataByAddress(
    contractAddress, "Race", payload
  );

  console.log("Response:");
  console.log(JSON.stringify(response, null, 2));
})();