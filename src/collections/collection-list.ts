import { CollectionManager } from "myria-core-sdk";
import config from "../config";

(async (): Promise<void> => {
  const env = config.environment;
  const collectionManager: CollectionManager = new CollectionManager(env);

  let collectionResponse;
  try {
    console.log(`Retrieving collection list...`);
    collectionResponse = await collectionManager.getCollectionList();
  } catch (error) {
    throw new Error(JSON.stringify(error, null, 2));
  }

  console.log("Requested collection list:");
  console.log(JSON.stringify(collectionResponse, null, 2));
})();
