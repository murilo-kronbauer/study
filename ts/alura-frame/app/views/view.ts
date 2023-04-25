export abstract class View<T> {
  protected element: HTMLElement;
  private sanitize: boolean;

  constructor(cssSelector: string, sanitize?: boolean) {
    const element = document.querySelector(cssSelector);
    if (!element) throw new Error(`Cannot find element ${element}`);
    this.element = element as HTMLElement;

    if (sanitize) this.sanitize = sanitize;
  }

  public update(model: T): void {
    let template = this.template(model);
    if (this.sanitize) {
      template = this.template(model).replace(/<script>[\s\S]*?<\/script>/, "");
    }
    this.element.innerHTML = this.template(model);
  }

  protected abstract template(model: T): string;
}
