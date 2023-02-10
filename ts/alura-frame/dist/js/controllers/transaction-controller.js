import { Transaction } from '../models/transaction.js';
import { Transactions } from '../models/transactions.js';
export class TransactionController {
    constructor() {
        this.transactions = new Transactions();
        this.inputDate = document.querySelector('#date');
        this.inputQuantity = document.querySelector('#quantity');
        this.inputValue = document.querySelector('#value');
    }
    add() {
        const transaction = this.create();
        transaction.date.setDate(12);
        this.transactions.add(transaction);
        console.log(this.transactions.getAll());
        this.clearForm();
    }
    create() {
        const date = new Date(this.inputDate.value.replace('-', ','));
        const quantity = Number(this.inputQuantity.value);
        const value = Number(this.inputValue.value);
        return new Transaction(date, quantity, value);
    }
    clearForm() {
        this.inputDate.value = null;
        this.inputQuantity.value = null;
        this.inputValue.value = null;
        this.inputDate.focus();
    }
}
