import { col, row, css } from "../utils";

class Block {
  constructor(value, options) {
    this.value = value;
    this.options = options;
  }

  toHtml() {
    throw new Error("Html method must be realized");
  }
}

export class TitleBlock extends Block {
  constructor(value, options) {
    super(value, options);
  }

  toHtml() {
    const { tag = "h1", styles } = this.options;
    return row(col(`<${tag}>${this.value}</${tag}>`), css(styles));
  }
}

export class ImageBlock extends Block {
  constructor(value, options) {
    super(value, options);
  }

  toHtml() {
    const { styles, alt, imageStyles } = this.options;
    return row(
      `<img src=${this.value} alt=${alt} style="${css(imageStyles)}" />`,
      css(styles)
    );
  }
}

export class ColumnsBlock extends Block {
  constructor(value, options) {
    super(value, options);
  }

  toHtml() {
    const { styles } = this.options;
    return row(this.value.map(col).join(""), css(styles));
  }
}

export class TextBlock extends Block {
  constructor(value, options) {
    super(value, options);
  }

  toHtml() {
    const { tag = "p", styles } = this.options;
    return row(col(`<${tag}>${this.value}</${tag}>`), css(styles));
  }
}
