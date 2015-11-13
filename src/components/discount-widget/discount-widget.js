import ko from "knockout";
import template from "./discount-widget.html";

class DiscountWidget {
	constructor(params) {
		this.logo = ko.observable(params.logo);
		this.netPrice = ko.observable();
		this.discountPercent = ko.observable();
		this.result = ko.observable();
	}
	
	calculate() {
		var netPrice = parseInt(this.netPrice());
		var discount = parseInt(this.discountPercent());
		var discountDelta = (netPrice / 100) * discount;

		this.result(netPrice - discountDelta);
	}
}

export default {
	viewModel: DiscountWidget,
	template: template
}