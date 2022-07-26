import { Modules } from "myria-core-sdk";

(async (): Promise<void> => {
  const collectionModule: Modules.CollectionModule =
    new Modules.CollectionModule();
  const collectionId: number = 5;

  let collectionResponse;
  try {
    console.log(`Retrieving collection #${collectionId}...`);
    collectionResponse = await collectionModule.getCollectionById(collectionId);
  } catch (error) {
    throw new Error(JSON.stringify(error, null, 2));
  }

  console.log("Requested collection response:");
  console.log(JSON.stringify(collectionResponse, null, 2));
})();
