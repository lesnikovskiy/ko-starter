import ko from "knockout";
import HelloWorld from "./components/hello-world/hello-world"
import DiscountWidget from "./components/discount-widget/discount-widget"

ko.components.register("hello-world", HelloWorld);
ko.components.register("discount-widget", DiscountWidget)

ko.applyBindings();