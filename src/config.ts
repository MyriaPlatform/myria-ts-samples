import { EnvTypes } from "myria-core-sdk";

export default {
  stark_key: process.env.STARK_KEY || "",
  public_key: process.env.PUBLIC_KEY || "",
  private_key: process.env.PRIVATE_KEY || "",
  collection_contract_address: process.env.CONTRACT_ADDRESS || "",
  metadata_api_url: process.env.METADATA_API_URL || "",
  project_id: parseInt(process.env.PROJECT_ID || ""),
  project_public_id: process.env.PROJECT_PUBLIC_ID || "",
  token_uri: process.env.TOKEN_URI || "",
  token_id: process.env.TOKEN_ID || "1",
  assetId: process.env.ASSET_ID || "1",
  environment: EnvTypes.STAGING,
  accountId: process.env.ACCOUNT_ID || '',
  apiKey: process.env.API_KEY || '',
  collectionId: Number(process.env.COLLECTION_ID || "1"),
}