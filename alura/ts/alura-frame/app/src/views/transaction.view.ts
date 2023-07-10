import { escapeString } from "../decorators/escape-string.decorator.js";
import { Transactions } from "../models/transactions.model.js";
import { View } from "./view.js";

export class TransactionView extends View<Transactions> {
  @escapeString
  protected template(model: Transactions): string {
    return `
		<table class="table table-hover table-bordered">
			<thead>
				<tr>
					<th>Data</th>
					<th>Quantity</th>
					<th>Value</th>
				</tr>
			</thead>
		<tbody>
			${model
        .getAll()
        .map((item) => {
          return `
					<tr>
						<td>${this.formatDate(item.date)}</td>
						<td>${item.quantity}</td>
						<td>${item.value}</td>
					</tr>
				
				`;
        })
        .join("")}
		</tbody>	
		</table>
		`;
  }

  private formatDate(date: Date): string {
    return new Intl.DateTimeFormat().format(date);
  }
}
