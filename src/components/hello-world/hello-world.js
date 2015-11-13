import ko from "knockout";
import template from "./hello-world.html";

class HelloWorld {
	constructor(params) {
		this.name = ko.observable(params.name);
	}
}

export default {
	viewModel: HelloWorld,
	template: template
}