class ElementWrapper {
  constructor(type) {
    this.root = document.createElement(type);
  }
  setAttribute(name, value) {
    this.root.setAttribute(name, value);
  }
  appendChild(component) {
    this.root.appendChild(component.root);
  }
}

class TextWrapper {
  constructor(content) {}
  setAttribute(name, value) {}
  appendChild() {}
}

class Component {}

export function createElement(type, attributes, ...children) {
  let e;
  if (typeof type === "string") {
    e = document.createElement(type);
  } else {
    e = new type();
  }

  let e = document.createElement(tagName);
  for (let p in attributes) {
    e.setAttribute(p, attributes[p]);
  }
  for (let child of children) {
    if (typeof child === "string") {
      child = document.createTextNode(child);
    }
    e.appendChild(child);
  }
  return e;
}
