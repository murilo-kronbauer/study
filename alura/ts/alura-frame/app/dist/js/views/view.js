var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { executionTimeLogger } from "../decorators/execution-time-logger.decorator.js";
export class View {
    constructor(cssSelector, sanitize) {
        const element = document.querySelector(cssSelector);
        if (!element)
            throw new Error(`Cannot find element ${element}`);
        this.element = element;
        if (sanitize)
            this.sanitize = sanitize;
    }
    update(model) {
        let template = this.template(model);
        if (this.sanitize) {
            template = this.template(model).replace(/<script>[\s\S]*?<\/script>/, "");
        }
        this.element.innerHTML = this.template(model);
    }
}
__decorate([
    executionTimeLogger()
], View.prototype, "update", null);
