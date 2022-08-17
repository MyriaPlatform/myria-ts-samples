import { CollectionManager } from "myria-core-sdk";

(async (): Promise<void> => {
  const collectionManager: CollectionManager = new CollectionManager();
  const collectionId: number = 39;

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
