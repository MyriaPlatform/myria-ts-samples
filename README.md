# Myria TS Samples

## Overview

Typescript application that shows how to interact with the `myria-core-sdk` library. The code samples provided in this project will help create new Myria projects, launch collections, and mint assets on the Myria Chain.

## Prerequisites

1. [Web3 Wallet: public and private key](https://docs.myria.com/docs/getting-started/myria-quickstart#1-web3-setup)
2. [Stark Key](https://docs.myria.com/docs/getting-started/myria-quickstart#13-generate-a-stark-key)
3. [Deployed Contract](https://docs.myria.com/docs/collections/collection-create#1-deploy-a-contract)
4. [Metadata API URL](https://docs.myria.com/docs/collections/collection-create#2-create-the-metadata-api-url)

## Setup

### 1. Clone the repository

```
git clone https://gitlab.com/myriaworld/myrianet/blockchain/myria-ts-samples.git
```

### 2. Enter myria-ts-samples directory

```
cd myria-ts-samples
```

### 3. Install dependencies
```
yarn
```

### 4. Provide environment variables

Rename the`.env.example` file into `.env` and provide the required configuration values:

```
# common
PUBLIC_KEY=         <public key of the owner's Ethereum wallet>
PRIVATE_KEY=        <private key of the owner's Ethereum wallet>
STARK_KEY=          <stark key derived from the owner's Ethereum wallet>

# collection
CONTRACT_ADDRESS=   <contract address deployed on Ethereum for a given collection>
METADATA_API_URL=   <metadata API URL that returns JSON metadata schema for a given collection>
PROJECT_ID=         <id of the project to which the collection will be added>

# mint
TOKEN_URI=          <URL path to the mintable asset metadata>
TOKEN_ID=           <unique identifier of a given asset, should be an incremental numeric value starting from 1>
```

## Running the app

### 1. Common

#### 1.1 Generate a Stark Key

Generates a Stark Key derived from a given Web3 private key.

Requirements: 
- Provide `PRIVATE_KEY` environment variable

```bash
npm run generate-stark-key
```

### 2. Projects

#### 2.1 Create a project

Creates a project on Myria.

Requirements:
1. Provide the `CONTRACT_ADDRESS` environment variable
2. Replace [params](https://github.com/MyriaPlatform/myria-ts-samples/blob/master/src/projects/create-project.ts#L14) values with your project details:
- `name` - project name
- `companyName` - company name that will be working on the project
- `contactEmail` - contact email

```bash
npm run create-project
```

#### 2.2 Get project list

Returns a list of projects created on Myria.

```bash
npm run get-project-list
```

#### 2.3 Get project details

Returns details of a given Myria project by its id.

Requirements:
- Replace [projectId](https://github.com/MyriaPlatform/myria-ts-samples/blob/master/src/projects/project-details.ts#L7) value with your project id

```bash
npm run get-project-details
```

#### 2.4 Update a project

Update the project by its id.

Requirements:
1. Provide the `PROJECT_ID` environment variable
2. Replace [params](https://github.com/MyriaPlatform/myria-ts-samples/blob/master/src/projects/update-project.ts#L16) values with new project details:
- `name` - new project name
- `companyName` - new company name that will be working on the project
- `contactEmail` - new contact email

```bash
npm run update-project
```

### 3. Collections

#### 3.1 Create a collection

Creates a collection on Myria.

Requirements:
1. Provide `CONTRACT_ADDRESS`, `METADATA_API_URL`, `PUBLIC_KEY`, `PROJECT_ID`, `STARK_KEY`  environment variables
2. Replace [params](https://github.com/MyriaPlatform/myria-ts-samples/blob/master/src/collections/create-collection.ts#L18) values with your collection details:
- `name` - collection name
- `description` - collection description

```bash
npm run create-collection
```

#### 3.2 Create a metadata schema

Creates a metadata schema for existing collections on Myria.

Requirements:
1. Provide `CONTRACT_ADDRESS` and `STARK_KEY`  environment variables
2. Replace [metadataSchema](https://github.com/MyriaPlatform/myria-ts-samples/blob/master/src/collections/create-metadata-schema.ts#L16) values with your metadata schema details details. Each object of the array contains the following properties:
- `name` - the name of the metadata schema attribute. Should match `trait_type` in the [Opensea metadata schema](https://docs.opensea.io/docs/metadata-standards#attributes)
- `type` - the type of the metadata schema attribute. Accepts `enum`, `string`, and `number`. In most cases, you should use `enum`
- `filterable` - the flag that defines if the attribute should be filterable on the Myria marketplace. Accepts `true` or `false`

```bash
npm run create-metadata-schema
```

#### 3.3 Get the collection list

Returns a list of collections created on Myria.

```bash
npm run get-collection-list
```

#### 3.4 Get collection by id

Returns details of a given Myria collection by its id.

Requirements:
- Replace [collectionId](https://github.com/MyriaPlatform/myria-ts-samples/blob/master/src/collections/collection-by-id.ts#L7) value with your collection id

```bash
npm run get-collection-by-id
```

#### 3.5 Get collection by public id

Returns details of a given Myria collection by its public id.

Requirements:
- Replace [publicId](https://github.com/MyriaPlatform/myria-ts-samples/blob/master/src/collections/collection-by-public-id.ts#L7) value with your collection public id

```bash
npm run get-collection-by-public-id
```

### 4. Mint transactions

#### 4.1 Create ERC721 mint transaction

Create an ERC721 mint transaction of a given asset on Myria.

Requirements:
1. Provide `STARK_KEY`, `CONTRACT_ADDRESS`, `TOKEN_URI`, `TOKEN_ID`  environment variables
2. Replace [feePercentage](https://github.com/MyriaPlatform/myria-ts-samples/blob/master/src/mints/create-erc721-mint-transaction.ts#L13) value with a royalty fee percentage for secondary sales
3. Replace [description](https://github.com/MyriaPlatform/myria-ts-samples/blob/master/src/mints/create-erc721-mint-transaction.ts#L26) value with a description for your asset

```bash
npm run create-erc721-mint-transaction
```

#### 4.2 Mint multiple ERC721 assets

Mint multiple ERC721 assets on Myria. There are two options you can use to achieve the same result.

#### Option 1

The first option represents multiple `createMintTransactionERC721` calls. The number of calls equals the number of assets you need to mint.

Requirements:
1. Provide `STARK_KEY`, `CONTRACT_ADDRESS`, `METADATA_API_URL`, `PUBLIC_KEY` environment variables
2. Replace [feePercentage](https://github.com/MyriaPlatform/myria-ts-samples/blob/master/src/mints/create-bulk-erc721-mint-transaction.ts#L14) value with a royalty fee percentage for secondary sales
3. Replace [startTokenId](https://github.com/MyriaPlatform/myria-ts-samples/blob/master/src/mints/create-bulk-erc721-mint-transaction.ts#L15) value with a starting token id
4. Replace [endTokenId](https://github.com/MyriaPlatform/myria-ts-samples/blob/master/src/mints/create-bulk-erc721-mint-transaction.ts#L16) value with an ending token id

```bash
npm run create-bulk-erc721-mint-transaction
```

#### Option 2

The second option represents a single `bulkMintableNftERC721` call that mints an array of assets passes as the `assets` parameter. It's recommended to use less than 100 items at a time with this option.

Requirements:
1. Provide `STARK_KEY`, `CONTRACT_ADDRESS`, `METADATA_API_URL`, `PUBLIC_KEY` environment variables
2. Replace [feePercentage](https://github.com/MyriaPlatform/myria-ts-samples/blob/master/src/mints/create-bulk-erc721-mint-transaction-v2.ts#L14) value with a royalty fee percentage for secondary sales
3. Replace [startTokenId](https://github.com/MyriaPlatform/myria-ts-samples/blob/master/src/mints/create-bulk-erc721-mint-transaction-v2.ts#L15) value with a starting token id
4. Replace [endTokenId](https://github.com/MyriaPlatform/myria-ts-samples/blob/master/src/mints/create-bulk-erc721-mint-transaction-v2.ts#L16) value with an ending token id

```bash
npm run create-bulk-erc721-mint-transaction-v2
```

#### 4.2 Get mint transaction details

Returns details of a given mint transaction by its id.

Requirements:
1. Provide `STARK_KEY`, `CONTRACT_ADDRESS`, `TOKEN_URI`, `TOKEN_ID`  environment variables
2. Replace [transactionId](https://github.com/MyriaPlatform/myria-ts-samples/blob/master/src/mints/mint-transaction-details.ts#L11) value with desired mint transaction id

```bash
npm run get-mint-transaction-details
```

#### 4.3 Get mint transactions by Stark Key

Returns a list of mint transactions by a given Stark Key.

Requirements:
- Provide `STARK_KEY` environment variable

```bash
npm run get-mint-transactions-by-stark-key
```

### 5. Assets

#### 5.1 Get assets by id

Returns details of a given Myria asset by its id.

Requirements:
- Replace [assetId](https://github.com/MyriaPlatform/myria-ts-samples/blob/master/src/assets/asset-by-id.ts#L6) value with your asset id

```bash
npm run get-asset-by-id
```

#### 5.2 Get assets by Stark Key

Returns assets by its Stark Key.

Requirements:
- Provide `STARK_KEY` environment variable

```bash
npm run get-assets-by-stark-key
```

#### 5.3 Get assets by a public key

Returns all assets minted by a given public key.

Requirements:
- Provide `PUBLIC_KEY` environment variable

```bash
npm run get-assets-by-public-key
```

#### 5.4 Get asset vault details

Returns details of a given asset vault by its asset id.

Requirements:
- Provide `STARK_KEY` environment variable
- Replace [assetId](https://github.com/MyriaPlatform/myria-ts-samples/blob/master/src/assets/asset-vault-details.ts#L7) value with your asset id

```bash
npm run get-asset-vault-details
```