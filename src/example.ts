import { MetamaskProvider } from "@0xcert/ethereum-metamask-provider";

const provider = new MetamaskProvider();

export async function enableMetamask() {
  if (!(await provider.isEnabled())) {
    await provider.enable();
  }
}
