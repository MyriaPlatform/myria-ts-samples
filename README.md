# Myria TS Samples

## Overview

Typescript application that shows how to interact with the `myria-core-sdk` library. The code samples provided in this project will help create new Myria projects, launch collections, and mint assets on the Myria Chain.

## Setup

### 1. Clone the repository

```
git clone https://gitlab.com/myriaworld/myrianet/blockchain/myria-ts-samples.git
```

### 2. Install dependencies
```
yarn
```

### 3. Provide environmental variables

Rename `.env.example` file into `.env` and provide the required configuration values:

```
# common
PUBLIC_KEY=         <public key of the owner's Ethereum wallet>
PRIVATE_KEY=        <private key of the owner's Ethereum wallet>
STARK_KEY=          <stark key derived from the owner's Ethereum wallet>

# collection
CONTRACT_ADDRESS=   <contract adddress deployed on Ethereum for a given collection>
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
- Provided `PRIVATE_KEY` environment variable

```bash
npm run generate-stark-key
```

### 2. Users

#### 2.1 Register a user

Registers a user on the Myria network.

Requirements:
- Provide `PUBLIC_KEY` and `STARK_KEY` environment variables

```bash
npm run register-user
```

#### 2.2 Get user by address

Returns user details by a given public key address.

Requirements:
- Provide `PUBLIC_KEY` environment variable

```bash
npm run get-user-by-address
```

### 3. Projects

#### 3.1 Create a project

Creates a project on Myria.

Requirements:
- Provide `CONTRACT_ADDRESS` environment variable
- Replace the following parameters to match your project details: `name`, `companyName`, `contactEmail`

```bash
npm run create-project
```

#### 3.2 Get project list

Returns a list of projects created on Myria.

```bash
npm run get-project-list
```

#### 3.3 Get project details

Returns details of a given Myria project by its id.

Requirements:
- Replace the following parameter to request the needed project: `projectId`

```bash
npm run get-project-details
```

### 4. Collections

#### 4.1 Create a collection

Creates a collection on Myria.

Requirements:
- Provide `CONTRACT_ADDRESS`, `METADATA_API_URL`, `PUBLIC_KEY`, `PROJECT_ID`, `STARK_KEY`  environment variables
- Replace the following parameters to match your collection details: `name`, `description`

```bash
npm run create-collection
```

#### 4.2 Get collection list

Returns a list of collections created on Myria.

Requirements:
- Replace the following parameter to request the needed collection: `collectionId`

```bash
npm run get-collection-list
```

#### 4.3 Get collection by id

Returns details of a given Myria collection by its id.

Requirements:
- Replace the following parameter to request the needed collection: `collectionId`

```bash
npm run get-collection-by-id
```

#### 4.4 Get collection by public id

Returns details of a given Myria collection by its public id.

Requirements:
- Replace the following parameter to request the needed collection: `publicId`

```bash
npm run get-collection-by-public-id
```

### 5. Mint transactions

#### 5.1 Create a mint transaction

Returns details of a given Myria collection by its public id.

Requirements:
- Provide `STARK_KEY`, `CONTRACT_ADDRESS`, `TOKEN_URI`, `TOKEN_ID`  environment variables
- Replace the following parameters to match your mint transaction details: `description`, `royalties`

```bash
npm run create-mint-transaction
```

#### 5.2 Get mint transaction details

Returns details of a given mint transaction by its id.

Requirements:
- Provide `STARK_KEY`, `CONTRACT_ADDRESS`, `TOKEN_URI`, `TOKEN_ID`  environment variables
- Replace the following parameter to request the needed mint transaction: `transactionId`

```bash
npm run get-mint-transaction-details
```

#### 5.3 Get mint transactions by Stark Key

Returns a list of mint transactions by a given Stark Key.

Requirements:
- Provide `STARK_KEY` environment variable

```bash
npm run get-mint-transactions-by-stark-key
```