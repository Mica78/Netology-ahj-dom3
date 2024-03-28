/* eslint-disable no-undef */
import { test, expect } from "@jest/globals";
import { JSDOM } from "jsdom";

import Widget from "../app";
import Table from "../table";
import getData from "../reciveData";

describe("testing Widget", () => {
  beforeEach(() => {
    const dom = new JSDOM();
    global.window = dom.window;
    global.document = dom.window.document;
    document.body.innerHTML = `
    <table border="1" cellspacing="2px" cellpadding="2px" cols="4">
      <tbody>
      </tbody>
    </table>
    `;
  });
  test("renderWidjet", () => {
    const table = new Table(document.querySelector("table"));
    table.createTableHead(getData());
    const widget = new Widget([["id", "up"]], 5000);
    widget.renderWidjet(0);
    const res = document.getElementsByTagName("th").length;
    expect(res).toEqual(24);
  });
});
