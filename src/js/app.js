import Table from "./table.js";
import getData from "./reciveData.js";
import Sorter from "./sorter.js";
import Arrow from "./arrow.js";

export default class Widget {
  constructor(handler, inteval) {
    this._handler = handler;
    this._interval = inteval;
    this.idx = 0;
    this.table = new Table(document.querySelector("table"));
  }

  renderWidjet(idx) {
    this.arrow = new Arrow(document.querySelector("tbody"));
    const recivedData = getData();
    const sorter = new Sorter(recivedData);
    const sortedData = sorter.sort(...this._handler[idx]);

    this.table.createTableData(sortedData);
    this.arrow.renderArrow(...this._handler[idx]);
  }

  run() {
    this.table.createTableHead(getData());
    let idx = 0;
    this.renderWidjet(idx);
    setInterval(() => {
      this.table.deleteTableData();
      this.arrow.deleteArrow();
      idx += 1;
      if (idx >= this._handler.length) {
        idx = 0;
      }
      this.renderWidjet(idx);
    }, this._interval);
  }
}
