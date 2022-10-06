import { CollectionManager } from "myria-core-sdk";
import config from "../config";

(async (): Promise<void> => {
  const env = config.environment;
  const collectionManager: CollectionManager = new CollectionManager(env);
  const collectionId: number = 129;

  let collectionResponse;
  try {
    console.log(`Retrieving collection #${collectionId}...`);
    collectionResponse = await collectionManager.getCollectionById(
      collectionId
    );
  } catch (error) {
    throw new Error(JSON.stringify(error, null, 2));
  }

  console.log("Requested collection response:");
  console.log(JSON.stringify(collectionResponse, null, 2));
})();
