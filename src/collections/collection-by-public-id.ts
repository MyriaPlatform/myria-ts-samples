import { CollectionManager } from "myria-core-sdk/dist/cjs/src/modules/CollectionManager";

(async (): Promise<void> => {
  const collectionManager: CollectionManager = new CollectionManager();
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
