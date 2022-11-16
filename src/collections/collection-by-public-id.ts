import { CollectionManager } from "myria-core-sdk";
import config from "../config";

(async (): Promise<void> => {
  const env = config.environment;
  const collectionManager: CollectionManager = new CollectionManager(env);
  const publicId: string = "17ca4116-e191-41f2-a969-1bb27b04e7e2";

  console.log(`Retrieving collection with ${publicId} public id...`);
  const collectionResponse = await collectionManager.getCollectionByPublicId(
    publicId
  );

  console.log("Requested collection response:");
  console.log(JSON.stringify(collectionResponse, null, 2));
})();
