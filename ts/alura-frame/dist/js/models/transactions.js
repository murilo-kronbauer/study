export class Transactions {
    constructor() {
        this.transactions = [];
    }
    add(transaction) {
        this.transactions.push(transaction);
    }
    getAll() {
        return this.transactions;
    }
}
