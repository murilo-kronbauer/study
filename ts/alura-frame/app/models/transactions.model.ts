import { Transaction } from "./transaction.model.js";

export class Transactions {
  private transactions: Transaction[] = [];

  public add(transaction: Transaction) {
    this.transactions.push(transaction);
  }

  public getAll(): readonly Transaction[] {
    return this.transactions;
  }
}
