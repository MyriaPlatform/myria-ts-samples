import { Modules } from "myria-core-sdk";

(async (): Promise<void> => {
  const collectionModule: Modules.CollectionModule =
    new Modules.CollectionModule();
  const publicId: string = "24dd6da6-e129-4e4f-ab01-a4408649f3bd";

  let collectionResponse;
  try {
    console.log(`Retrieving collection with ${publicId} public id...`);
    collectionResponse = await collectionModule.getCollectionByPublicId(
      publicId
    );
  } catch (error) {
    throw new Error(JSON.stringify(error, null, 2));
  }

  console.log("Requested collection response:");
  console.log(JSON.stringify(collectionResponse, null, 2));
})();
