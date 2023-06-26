import { Transaction } from "../models/transaction.model.js";
import { Transactions } from "../models/transactions.model.js";
import { TransactionView } from "../views/transaction.view.js";
import { MessageView } from "../views/message.view.js";
import { DaysOfWeek } from "../enums/days-of-week.enum.js";
import { executionTimeLogger } from "../decorators/execution-time-logger.decorator.js";
import { inspectMethod } from "../decorators/inspect-method.decorator.js";

export class TransactionController {
  private inputDate: HTMLInputElement;
  private inputQuantity: HTMLInputElement;
  private inputValue: HTMLInputElement;
  private transactions = new Transactions();
  private transactionView = new TransactionView("#transactionView");
  private messageView = new MessageView("#messageView");

  constructor() {
    this.inputDate = document.querySelector("#date") as HTMLInputElement;
    this.inputValue = document.querySelector("#value") as HTMLInputElement;
    this.inputQuantity = document.querySelector(
      "#quantity"
    ) as HTMLInputElement;
    this.transactionView.update(this.transactions);
  }

  @inspectMethod
  @executionTimeLogger()
  public add(): void {
    const transaction = Transaction.create(
      this.inputDate.value,
      this.inputQuantity.value,
      this.inputValue.value
    );
    if (!this.isBussinessDay(transaction.date)) {
      this.messageView.update("Transactions can only be done on business days");
      return;
    }
    this.transactions.add(transaction);
    this.clearForm();
    this.updateView();
  }

  private clearForm(): void {
    this.inputDate.value = "";
    this.inputQuantity.value = "";
    this.inputValue.value = "";
    this.inputDate.focus();
  }

  private updateView(): void {
    this.transactionView.update(this.transactions);
    this.messageView.update("Transaction created successfully");
  }

  private isBussinessDay(date: Date): boolean {
    return (
      date.getDay() > DaysOfWeek.SUNDAY && date.getDay() < DaysOfWeek.SATURDAY
    );
  }
}
