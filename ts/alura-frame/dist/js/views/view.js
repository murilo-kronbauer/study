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
