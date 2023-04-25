import { Transaction } from "../models/transaction.model";
import { Transactions } from "../models/transactions.model";
import { TransactionView } from "../views/transaction-view.js";
import { MessageView } from "../views/message-view.js";
export class TransactionController {
    constructor() {
        this.transactions = new Transactions();
        this.transactionView = new TransactionView("#transactionView");
        this.messageView = new MessageView("#messageView");
        this.inputDate = document.querySelector("#date");
        this.inputQuantity = document.querySelector("#quantity");
        this.inputValue = document.querySelector("#value");
        this.transactionView.update(this.transactions);
    }
    add() {
        const transaction = Transaction.create(this.inputDate.value, this.inputQuantity.value, this.inputValue.value);
        if (transaction.date.getDay() > 0 && transaction.date.getDay() < 6) {
            this.transactions.add(transaction);
            this.clearForm();
            this.updateView();
        }
        else {
            this.messageView.update("Transactions can only be done on business days");
        }
    }
    clearForm() {
        this.inputDate.value = null;
        this.inputQuantity.value = null;
        this.inputValue.value = null;
        this.inputDate.focus();
    }
    updateView() {
        this.transactionView.update(this.transactions);
        this.messageView.update("Transaction created successfully");
    }
}
