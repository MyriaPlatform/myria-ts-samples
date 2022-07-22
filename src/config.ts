export default {
  contract_address: process.env.CONTRACT_ADDRESS || "",
  stark_key: '0x' + process.env.STARK_KEY || "",
  owner_private_key: process.env.OWNER_PRIVATE_KEY || "",
  owner_public_key: process.env.OWNER_PUBLIC_KEY || "",
  metadata_api_url: process.env.METADATA_API_URL || ""
}