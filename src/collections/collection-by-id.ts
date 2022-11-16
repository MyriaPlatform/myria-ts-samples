import { CollectionManager } from "myria-core-sdk";
import config from "../config";

(async (): Promise<void> => {
  const env = config.environment;
  const collectionManager: CollectionManager = new CollectionManager(env);
  const collectionId: number = 129;

  console.log(`Retrieving collection #${collectionId}...`);
  const collectionResponse = await collectionManager.getCollectionById(
    collectionId
  );

  console.log("Requested collection response:");
  console.log(JSON.stringify(collectionResponse, null, 2));
})();
