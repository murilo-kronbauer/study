import { TransactionController } from "./controllers/transaction.controller.js";

const transactionController = new TransactionController();
const form = document.querySelector(".form");
if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    transactionController.add();
  });
} else {
  throw new Error("Form is null");
}
