import Web3 from "web3";
import { IMyriaClient, MyriaClient } from "myria-core-sdk";

function initWeb3Instance() {
  let windowBrowser;
  if (window && window.ethereum) {
    windowBrowser = new Web3(Web3.givenProvider);
    window.web3 = windowBrowser;
  } else {
    return;
  }
  return windowBrowser;
}

export async function getMyriaClient() {
  // requires client-side implementation and a MetaMask wallet
  const web3Instance = await initWeb3Instance();
  const networkId = await web3Instance.eth.net.getId();

  const client: IMyriaClient = {
    provider: web3Instance.eth.currentProvider as any,
    networkId,
    web3: web3Instance as any,
  };

  const myriaClient = new MyriaClient(client);
  return myriaClient;
}