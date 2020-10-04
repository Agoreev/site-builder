import { block } from "../utils";
import { TextBlock, TitleBlock } from "./blocks";

export class Sidebar {
  constructor(selector, updateCallback) {
    this.$el = document.querySelector(selector);
    this.update = updateCallback;
    this.init();
  }

  init() {
    this.$el.insertAdjacentHTML("afterbegin", this.template);
    this.$el.addEventListener("submit", this.add.bind(this));
  }
  get template() {
    return [block("text"), block("title")].join("");
  }

  add(e) {
    e.preventDefault();

    const type = event.target.name;
    const value = event.target.value.value;
    const styles = event.target.styles.value;

    let newBlock = null;

    switch (type) {
      case "text":
        newBlock = new TextBlock(value, { styles });
        break;
      case "title":
        newBlock = new TitleBlock(value, { styles });
        break;
      default:
        newBlock = new TextBlock(value, { styles });
    }

    this.update(newBlock);

    event.target.value.value = "";
    event.target.styles.value = "";
  }
}
