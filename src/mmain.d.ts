import { Contract } from 'near-api-js';

interface ArgBuilder<T> {
  args: T;
  gas: string;
  amount: string;
}

interface nftMetaType {
  title: string;
  description: string;
  media: string;
  media_hash: string;
  copies: number;
  issued_at: string;
}

interface completeTheOrderArgs {
  receiver_id: string;
  token_metadata: nftMetaType[];
}

declare module 'near-api-js' {
  interface Contract {
    get_current_order(): Promise<[string | null, bigint]>;
    complete_the_order(Args: ArgBuilder<completeTheOrderArgs>): Promise<'OK'>;
  }
}
