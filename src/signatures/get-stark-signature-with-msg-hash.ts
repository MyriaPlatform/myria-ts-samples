import BN from "bn.js";
import { SignatureTxManager } from "myria-core-sdk";

(async (): Promise<void> => {


  const signatureTxManager = new SignatureTxManager();
  console.log(`Get stark key by wallet signature...`);
  const walletSignature = "0xe0b8c08575aa7ad2e4dc03168558b7b3a7a7a7f94a53872b7b1789fadbfae75f5bf34cee62080cdda029bfaefb9b0c051a2775d909312128a64df3b1f217515d1c";
  const msgHash = new BN("1234"); // Replace with actual message hash value
// Example of message hash
//   msgHash = StarkwareLib.getTransferMsgHash(
//     payload.quantizedAmount,
//     payload.nonce,
//     payload.senderVaultId,
//     payload.token,
//     payload.receiverVaultId,
//     payload.receiverPublicKey,
//     payload.expirationTimestamp
//   );
  const response = await signatureTxManager.generateStarkSignature(walletSignature, msgHash);

  console.log("Stark key from wallet signature:");
  console.log(JSON.stringify(response, null, 2));
})();
