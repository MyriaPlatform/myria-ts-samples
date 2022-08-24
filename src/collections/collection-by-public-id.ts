import { CollectionManager } from "myria-core-sdk";
import config from "../config";

(async (): Promise<void> => {
  const env = config.environment;
  const collectionManager: CollectionManager = new CollectionManager(env);
  const publicId: string = "27fe0077-c54a-4ce9-a87d-fe6ad3e6310d";

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
