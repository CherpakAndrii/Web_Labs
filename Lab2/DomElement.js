class DOMElement {
  constructor(tagName, children, className, attributes, handlers) {
    this.tagName = tagName;
    this.children = children || '';
    this.className = className || '';
    this.attributes = attributes || {};
    this.handlers = handlers || {};
  }
  render() {
    const element = document.createElement(this.tagName);
    element.className = this.className;

    Object.keys(this.attributes).forEach(key => {
      if (key === 'dataset') {
        Object.keys(this.attributes[key]).forEach(dataset => {
          element.dataset[dataset] = this.attributes[key][dataset];
        });
        return;
      }
      element[key] = this.attributes[key];
    });

    Object.keys(this.handlers).forEach(key => {
      element.addEventListener(key, this.handlers[key]);
    });

    if (typeof this.children === 'string') {
      element.insertAdjacentHTML('afterbegin', this.children);
    } else if (Array.isArray(this.children)) {
      element.append(...this.children);
    } else {
      element.append(this.children);
    }

    return element;
  }
}

export default DOMElement;
