import { CollectionManager, GetCollectionByApiKeyParams, GetCollectionParams } from "myria-core-sdk";
import config from "../config";

(async (): Promise<void> => {
  const env = config.environment;
  const collectionManager: CollectionManager = new CollectionManager(env);

  const params: GetCollectionByApiKeyParams = {
    accountId: 'account-id-get-from-dev-portal',
    apiKey: 'api-key-get-from-dev-portal'
  }

  console.log(`Retrieving collection list...`);
  const collectionResponse = await collectionManager.getCollectionsByApiKey(params);

  console.log("Requested collection list:");
  console.log(JSON.stringify(collectionResponse, null, 2));
})();
