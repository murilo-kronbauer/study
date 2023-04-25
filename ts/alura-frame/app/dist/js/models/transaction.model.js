export class Transaction {
    constructor(_date, quantity, value) {
        this._date = _date;
        this.quantity = quantity;
        this.value = value;
    }
    get volume() {
        return this.quantity * this.value;
    }
    get date() {
        const date = new Date(this._date.getTime());
        return this._date;
    }
    static create(date, quantity, value) {
        return new Transaction(new Date(date.replace("-", ",")), Number(quantity), Number(value));
    }
}
