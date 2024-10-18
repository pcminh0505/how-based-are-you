export const BASE_SEPOLIA_CHAIN_ID = 84532;

// TODO: Change to official NFT contract later
export const mintContractAddress = '0x0e3193772aef408843a68cd17F9bb70E9dab7cc5';
export const mintABI = [
  {
    inputs: [
      {
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        internalType: 'string',
        name: 'uri',
        type: 'string',
      },
    ],
    name: 'safeMint',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
] as const;
