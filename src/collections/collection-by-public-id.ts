import { CollectionManager } from "myria-core-sdk/dist/types/src/modules";

(async (): Promise<void> => {
  const collectionManager: CollectionManager = new CollectionManager();
  const publicId: string = "24dd6da6-e129-4e4f-ab01-a4408649f3bd";

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
