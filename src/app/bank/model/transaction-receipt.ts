export class TransactionReceipt {
    transactionHash: string;
    transactionIndex: number;
    blockHash: string;
    blockNumber: number;
    cumulativeGasUsed: number;
    gasUsed: number;
    contractAddress: string;
    root: string;
    status: string;
    from: string;
    to: string;
}
