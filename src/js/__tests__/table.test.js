/* eslint-disable no-undef */
import { test, expect } from "@jest/globals";

import Table from "../table";
import getData from "../reciveData";
import { JSDOM } from "jsdom";

describe("testing Table", () => {
  let data = getData();
  beforeEach(() => {
    const dom = new JSDOM();
    global.window = dom.window;
    global.document = dom.window.document;
    document.body.innerHTML = `
      <table border="1" cellspacing="2px" cellpadding="2px">
        <tbody>
        </tbody>
      </table>
    `;
  });

  test("create head", () => {
    const table = new Table(document.querySelector("table"));
    table.createTableHead(data);
    expect([
      document.getElementsByTagName("th")[0].textContent,
      document.getElementsByTagName("th")[1].textContent,
      document.getElementsByTagName("th")[2].textContent,
      document.getElementsByTagName("th")[3].textContent,
    ]).toEqual(["id", "title", "imdb", "year"]);
  });
  test("create row", () => {
    const table = new Table(document.querySelector("table"));
    table.createTableHead(data);
    table.createTableRow(data[0]);
    const res = [
      document.getElementsByTagName("th")[4].textContent,
      document.getElementsByTagName("th")[5].textContent,
      document.getElementsByTagName("th")[6].textContent,
      document.getElementsByTagName("th")[7].textContent,
    ];
    expect(res).toEqual(["26", "Побег из Шоушенка", "9.30", "1994"]);
  });
  test("create table data", () => {
    const table = new Table(document.querySelector("table"));
    table.createTableHead(data);
    table.createTableData(data);
    const res = document.getElementsByTagName("th").length;
    expect(res).toEqual(24);
  });
  test("delete table data", () => {
    const table = new Table(document.querySelector("table"));
    table.createTableHead(data);
    table.createTableData(data);
    table.deleteTableData();
    const res = document.getElementsByTagName("th").length;
    expect(res).toEqual(4);
  });
});
