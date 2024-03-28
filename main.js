/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/data/data.json
const data_namespaceObject = /*#__PURE__*/JSON.parse('[{"id":26,"title":"Побег из Шоушенка","imdb":9.3,"year":1994},{"id":25,"title":"Крёстный отец","imdb":9.2,"year":1972},{"id":27,"title":"Крёстный отец 2","imdb":9,"year":1974},{"id":1047,"title":"Тёмный рыцарь","imdb":9,"year":2008},{"id":223,"title":"Криминальное чтиво","imdb":8.9,"year":1994}]');
;// CONCATENATED MODULE: ./src/js/reciveData.js

function getData(data = data_namespaceObject) {
  return data;
}
;// CONCATENATED MODULE: ./src/js/table.js
class Table {
  constructor(element) {
    this._element = element;
  }
  createTableHead(data) {
    const tr = document.createElement("tr");
    tr.classList.add("head");
    const tbody = this._element.querySelector("tbody");
    for (let i in data[0]) {
      const th = document.createElement("th");
      th.textContent = i;
      tr.insertAdjacentElement("beforeEnd", th);
    }
    tbody.insertBefore(tr, tbody.lastChild);
  }
  createTableRow(data) {
    const tr = document.createElement("tr");
    tr.classList.add("added");
    const tbody = this._element.querySelector("tbody");
    const head = tbody.querySelector(".head").children;
    const arr = Array.from(head);
    const imdbElement = arr.find(res => res.textContent === "imdb");
    const imdbIndex = arr.indexOf(imdbElement);
    for (let index = 0; index < head.length; index++) {
      const th = document.createElement("th");
      th.textContent = data[head[index].textContent];
      if (index === imdbIndex) {
        th.textContent = Number(th.textContent).toFixed(2);
      }
      tr.insertAdjacentElement("beforeEnd", th);
    }
    tbody.insertAdjacentElement("beforeEnd", tr);
  }
  createTableData(data) {
    for (let index = 0; index < data.length; index++) {
      this.createTableRow(data[index]);
    }
  }
  deleteTableData() {
    const added = Array.from(document.querySelectorAll(".added"));
    for (let index = 0; index < added.length; index++) {
      added[index].remove();
    }
  }
}
;// CONCATENATED MODULE: ./src/js/sorter.js
class Sorter {
  constructor(data) {
    this.data = data;
  }
  columns() {
    return Object.keys(this.data[0]).length;
  }
  sort(column, direction) {
    const res = this.data.sort((a, b) => {
      if (Number(a[column])) {
        return a[column] > b[column] ? 1 : -1;
      } else {
        return a[column].toLowerCase() > b[column].toLowerCase() ? 1 : -1;
      }
    });
    if (direction === "up") {
      return res;
    }
    return res.reverse();
  }
}
;// CONCATENATED MODULE: ./src/js/arrow.js
class Arrow {
  constructor(element) {
    this._element = element;
    this.svgDowm = `<svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="16" height="14" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19V5m0 14-4-4m4 4 4-4"/>
    </svg>`;
    this.svgUp = `<svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="16" height="14" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v13m0-13 4 4m-4-4-4 4"/>
    </svg>`;
  }
  renderArrow(column, direction) {
    let direct = this.svgUp;
    if (direction === "up") {
      direct = this.svgDowm;
    }
    const thArr = Array.from(this._element.querySelector("tr").querySelectorAll("th"));
    const el = thArr.find(res => {
      return res.textContent === column;
    });
    this.arrow = document.createElement("div");
    this.arrow.innerHTML = direct;
    el.insertAdjacentElement("beforeEnd", this.arrow);
    el.style.position = "relative";
    this.arrow.style.position = "absolute";
    this.arrow.style.right = "0px";
    this.arrow.style.top = "10%";
  }
  deleteArrow() {
    this.arrow.remove();
  }
}
;// CONCATENATED MODULE: ./src/js/app.js




class Widget {
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
;// CONCATENATED MODULE: ./src/index.js








document.addEventListener("DOMContentLoaded", () => {
  const handler = [["id", "up"], ["id", "down"], ["title", "up"], ["title", "down"], ["year", "up"], ["year", "down"], ["imdb", "up"], ["imdb", "down"]];
  const widjet = new Widget(handler, 5000);
  widjet.run();
});
/******/ })()
;