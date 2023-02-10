import { TransactionController } from './controllers/transaction-controller.js';
const transactionController = new TransactionController();
const form = document.querySelector('.form');
form.addEventListener('submit', event => {
    event.preventDefault();
    transactionController.add();
});
