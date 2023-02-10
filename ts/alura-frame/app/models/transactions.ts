import { Transaction } from './transaction.js';

export class Transactions {
    private transactions: Transaction[] = [];

    add(transaction: Transaction) {
        this.transactions.push(transaction);
    }

    getAll(): readonly Transaction[] {
        return this.transactions;
    }
}
