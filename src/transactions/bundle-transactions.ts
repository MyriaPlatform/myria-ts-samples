import { BundleTransactions, EnvTypes, GameTransactionManager, GameTransferERC20Params, INativeMyriaClient, MultiTransactionType, NativeMyriaClient, TokenType, TransactionItems, TransactionType } from "myria-core-sdk";
import config from "../config";

(async (): Promise<void> => {

    const imyriaClient: INativeMyriaClient = {
        networkId: 11155111,
        env: EnvTypes.STAGING
    }
    const myriaClient = new NativeMyriaClient(imyriaClient);
    const gameTransactionManager = new GameTransactionManager(myriaClient);
    console.log(`Execute bundle transactions...`);
    const requestId = "1253dac4-dae2-4234-aa52-e4679f520002";
    const groupRequestId = "Test-execute-bundle-tx-group-req-id-1";
    const partnerRefId = "Test-execute-bundle-tx-partner-ref-id-1";
    const developerApiKey = "Developer Api Key";


    const transactionItem: TransactionItems =
    {
        sourceWallet: "0x724f337bF0Fa934dB9aa3ec6dEa49B03c54AD3cc",
        transactionType: MultiTransactionType.TRANSFER,
        data: [{
            tokenType: TokenType.MINTABLE_ERC721,
            tokenAddress: "0x83a795E1E91560Aae4207fDae9199d384f11D9d2",
            tokenId: "28"
        }],
        destinationWallet: "0x724f337bF0Fa934dB9aa3ec6dEa49B03c54AD3cc",
        sourceWalletSignature: "0x35e44fe1eb569df7238b11bd754d4cd6797762ef3eac3258fd162910ce262d0a65f97f2941a88458ff9c24bc4e501e9258d6c20e367287b54bb21e6e7835f3c71c",
        sourceWalletSignatureTx: "",
    }
    const encodedTxMsg = gameTransactionManager.serializeTxItem(transactionItem);
    console.log("Build transaction signature:", encodedTxMsg);
    const txMessageHash = gameTransactionManager.buildHashMessageForMultiTx(encodedTxMsg);
    const userSignatureForBundle = ""; // Client provider personal.sign(txMessageHash);

    transactionItem.sourceWalletSignatureTx = userSignatureForBundle;

    const params: BundleTransactions = {
        groupRequestId,
        developerApiKey,
        requestId,
        partnerRefId,
        data: [transactionItem]
    };
    const response = await gameTransactionManager.executeBundleTransactions(params)

    console.log("Response execute of bundle transactions:");
    console.log(JSON.stringify(response, null, 2));
})();
