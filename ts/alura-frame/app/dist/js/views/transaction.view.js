import { View } from "./view.js";
export class TransactionView extends View {
    template(model) {
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
						<td>${this.formatedDate(new Date())}</td>
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
    formatedDate(date) {
        return new Intl.DateTimeFormat().format(date);
    }
}
