export abstract class View<T> {
  protected element: HTMLElement;

  constructor(cssSelector: string, sanitize?: boolean) {
    const element = document.querySelector(cssSelector);
    if (!element) throw new Error(`Cannot find element ${element}`);
    this.element = element as HTMLElement;
  }

  public update(model: T): void {
    let template = this.template(model);
    this.element.innerHTML = this.template(model);
  }

  protected abstract template(model: T): string;
}
