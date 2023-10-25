import { Goerli } from "@usedapp/core";

export const ROUTER_ADDRESS = "0x71b3Aa00064c87d0FeEFE6C2aD91b1F01d0E389D"; 

export const DAPP_CONFIG = {
  readOnlyChainId: Goerli.chainId,
  readOnlyUrls: {
    [Goerli.chainId]: "https://eth-goerli.g.alchemy.com/v2/UymYcwXW_fIxUG-7ksqCfwUKteFwB6iF",
  },
};