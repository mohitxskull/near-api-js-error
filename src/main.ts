import { keyStores, KeyPair, connect, Contract } from 'near-api-js';
import dotenv from 'dotenv';

dotenv.config();

const ContractName = process.env.NAME;
const PriKey = process.env.PRIKEY;
const KeyStore = new keyStores.InMemoryKeyStore();

const KeyPairC = KeyPair.fromString(PriKey);

const ConnectionConfig = {
  networkId: 'testnet',
  keyStore: KeyStore,
  nodeUrl: 'https://rpc.testnet.near.org',
  walletUrl: 'https://wallet.testnet.near.org',
  helperUrl: 'https://helper.testnet.near.org',
  headers: {},
};

const NearConnection = await connect(ConnectionConfig);
await KeyStore.setKey(ConnectionConfig.networkId, ContractName, KeyPairC);

const ContractAcc = await NearConnection.account(ContractName);

const CContract = new Contract(ContractAcc, ContractName, {
  viewMethods: ['get_current_order'],
  changeMethods: ['complete_the_order'],
});

const demoMeta = {
  description: 'This is a demo description',
  media: 'https://i.imgur.com/nsdHKU3.jpeg',
  media_hash: 'he3279e32eduen23db2837e2387e23',
  title: 'Demo',
  copies: 1,
  issued_at: Date.now().toString(),
};

const CurrentOrder = await CContract.get_current_order();
const CurrentMinerPaidFor = CurrentOrder[1];

const finalMeta: (typeof demoMeta)[] = [];

for (let i = 0; i < CurrentMinerPaidFor; i++) {
  finalMeta.push(demoMeta);
}

const finalCall = await CContract.complete_the_order({
  args: {
    receiver_id: 'asjdkajhd.testnet',
    token_metadata: finalMeta,
  },
  gas: '100000000000000',
  amount: '0',
});


console.log(finalCall);