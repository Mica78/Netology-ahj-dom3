/* eslint-disable no-undef */
import { test, expect } from "@jest/globals";
import { JSDOM } from "jsdom";

import Arrow from "../arrow";

describe("testing Arrow", () => {
  beforeEach(() => {
    const dom = new JSDOM();
    global.window = dom.window;
    global.document = dom.window.document;
    document.body.innerHTML = `
    <table border="1" cellspacing="2px" cellpadding="2px" cols="4">
      <tbody>
        <tr>
          <th>id</th>
          <th>title</th>
          <th>year</th>
          <th>imdb</th>
        </tr>
      </tbody>
    </table>
    `;
  });
  test("renderArrow", () => {
    const arrow = new Arrow(document.querySelector("tbody"));
    arrow.renderArrow("id", "up");
    const res = document.getElementsByTagName("svg").length;
    expect(res).toEqual(1);
  });
  test("renderArrowdown", () => {
    const arrow = new Arrow(document.querySelector("tbody"));
    arrow.renderArrow("id", "down");
    const res = document.getElementsByTagName("svg").length;
    expect(res).toEqual(1);
  });
  test("deleteArrow", () => {
    const arrow = new Arrow(document.querySelector("tbody"));
    arrow.renderArrow("id", "up");
    arrow.deleteArrow();
    const res = document.getElementsByTagName("svg").length;
    expect(res).toEqual(0);
  });
});
