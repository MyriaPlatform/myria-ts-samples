import { CollectionManager, GetCollectionParams } from "myria-core-sdk";
import config from "../config";

(async (): Promise<void> => {
  const env = config.environment;
  const collectionManager: CollectionManager = new CollectionManager(env);

  const params: GetCollectionParams = {
    limit: 100,
    page: 1,
    isHot: false
  }

  console.log(`Retrieving collection list...`);
  const collectionResponse = await collectionManager.getCollectionList(params);

  console.log("Requested collection list:");
  console.log(JSON.stringify(collectionResponse, null, 2));
})();
