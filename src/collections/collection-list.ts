import { CollectionManager } from "myria-core-sdk";

(async (): Promise<void> => {
  const collectionManager: CollectionManager = new CollectionManager();

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
