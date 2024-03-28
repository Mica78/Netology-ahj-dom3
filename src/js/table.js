export default class Table {
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
    const imdbElement = arr.find((res) => res.textContent === "imdb");
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
