import { CollectionManager } from "myria-core-sdk";
import config from "../config";

(async (): Promise<void> => {
  const env = config.environment;
  const collectionManager: CollectionManager = new CollectionManager(env);
  const publicId: string = "17ca4116-e191-41f2-a969-1bb27b04e7e2";

  let collectionResponse;
  try {
    console.log(`Retrieving collection with ${publicId} public id...`);
    collectionResponse = await collectionManager.getCollectionByPublicId(
      publicId
    );
  } catch (error) {
    throw new Error(JSON.stringify(error, null, 2));
  }

  console.log("Requested collection response:");
  console.log(JSON.stringify(collectionResponse, null, 2));
})();
