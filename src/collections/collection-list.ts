import { Modules } from "myria-core-sdk";

(async (): Promise<void> => {
  const collectionModule: Modules.CollectionModule =
    new Modules.CollectionModule();

  let collectionResponse;
  try {
    console.log(`Retrieving collection list...`);
    collectionResponse = await collectionModule.getCollectionList();
  } catch (error) {
    throw new Error(JSON.stringify(error, null, 2));
  }

  console.log("Requested collection list:");
  console.log(JSON.stringify(collectionResponse, null, 2));
})();
