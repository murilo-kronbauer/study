import { Transaction } from "../models/transaction.model.js";
import { Transactions } from "../models/transactions.model.js";
import { TransactionView } from "../views/transaction.view.js";
import { MessageView } from "../views/message.view.js";
import { DaysOfWeek } from "../enums/days-of-week.enum.js";
export class TransactionController {
    constructor() {
        this.transactions = new Transactions();
        this.transactionView = new TransactionView("#transactionView");
        this.messageView = new MessageView("#messageView");
        this.inputDate = document.querySelector("#date");
        this.inputValue = document.querySelector("#value");
        this.inputQuantity = document.querySelector("#quantity");
        this.transactionView.update(this.transactions);
    }
    add() {
        const transaction = Transaction.create(this.inputDate.value, this.inputQuantity.value, this.inputValue.value);
        if (!this.isBussinessDay(transaction.date)) {
            this.messageView.update("Transactions can only be done on business days");
            return;
        }
        this.transactions.add(transaction);
        this.clearForm();
        this.updateView();
    }
    clearForm() {
        this.inputDate.value = "";
        this.inputQuantity.value = "";
        this.inputValue.value = "";
        this.inputDate.focus();
    }
    updateView() {
        this.transactionView.update(this.transactions);
        this.messageView.update("Transaction created successfully");
    }
    isBussinessDay(date) {
        return (date.getDay() > DaysOfWeek.SUNDAY && date.getDay() < DaysOfWeek.SATURDAY);
    }
}
