var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Transaction } from "../models/transaction.model.js";
import { Transactions } from "../models/transactions.model.js";
import { TransactionView } from "../views/transaction.view.js";
import { MessageView } from "../views/message.view.js";
import { DaysOfWeek } from "../enums/days-of-week.enum.js";
import { executionTimeLogger } from "../decorators/execution-time-logger.decorator.js";
import { inspectMethod } from "../decorators/inspect-method.decorator.js";
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
__decorate([
    inspectMethod(),
    executionTimeLogger()
], TransactionController.prototype, "add", null);
