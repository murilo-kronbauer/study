export class Transaction {
  constructor(
    private _date: Date,
    public readonly quantity: number,
    public readonly value: number
  ) {}

  get volume(): number {
    return this.quantity * this.value;
  }

  get date(): Date {
    const date = new Date(this._date.getTime());
    return this._date;
  }

  public static create(
    date: string,
    quantity: string,
    value: string
  ): Transaction {
    return new Transaction(
      new Date(date.replace("-", ",")),
      Number(quantity),
      Number(value)
    );
  }
}
