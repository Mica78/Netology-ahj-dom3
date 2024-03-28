import { test, expect } from "@jest/globals";
import Sorter from "../sorter";
import Data from "../reciveData";

test("testing columns", () => {
  const data = new Data();
  const res = new Sorter(data).columns();
  expect(res).toEqual(4);
});

describe("testing sort", () => {
  const data = new Data();
  const sorter = new Sorter(data);
  test("sort up id", () => {
    const res = sorter.sort("id", "up");
    const ex = [
      { id: 25, title: "Крёстный отец", imdb: 9.2, year: 1972 },
      { id: 26, title: "Побег из Шоушенка", imdb: 9.3, year: 1994 },
      { id: 27, title: "Крёстный отец 2", imdb: 9, year: 1974 },
      { id: 223, title: "Криминальное чтиво", imdb: 8.9, year: 1994 },
      { id: 1047, title: "Тёмный рыцарь", imdb: 9, year: 2008 },
    ];
    expect(res).toEqual(ex);
  });
  test("sort down id", () => {
    const res = sorter.sort("id", "down");
    const ex = [
      { id: 1047, title: "Тёмный рыцарь", imdb: 9, year: 2008 },
      { id: 223, title: "Криминальное чтиво", imdb: 8.9, year: 1994 },
      { id: 27, title: "Крёстный отец 2", imdb: 9, year: 1974 },
      { id: 26, title: "Побег из Шоушенка", imdb: 9.3, year: 1994 },
      { id: 25, title: "Крёстный отец", imdb: 9.2, year: 1972 },
    ];
    expect(res).toEqual(ex);
  });
  test("sort up year", () => {
    const res = sorter.sort("year", "up");
    const ex = [
      { id: 25, title: "Крёстный отец", imdb: 9.2, year: 1972 },
      { id: 27, title: "Крёстный отец 2", imdb: 9, year: 1974 },
      { id: 26, title: "Побег из Шоушенка", imdb: 9.3, year: 1994 },
      { id: 223, title: "Криминальное чтиво", imdb: 8.9, year: 1994 },
      { id: 1047, title: "Тёмный рыцарь", imdb: 9, year: 2008 },
    ];
    expect(res).toEqual(ex);
  });
  test("sort down year", () => {
    const res = sorter.sort("year", "down");
    const ex = [
      { id: 1047, title: "Тёмный рыцарь", imdb: 9, year: 2008 },
      { id: 26, title: "Побег из Шоушенка", imdb: 9.3, year: 1994 },
      { id: 223, title: "Криминальное чтиво", imdb: 8.9, year: 1994 },
      { id: 27, title: "Крёстный отец 2", imdb: 9, year: 1974 },
      { id: 25, title: "Крёстный отец", imdb: 9.2, year: 1972 },
    ];
    expect(res).toEqual(ex);
  });
  test("sort up title", () => {
    const res = sorter.sort("title", "up");
    const ex = [
      { id: 223, title: "Криминальное чтиво", imdb: 8.9, year: 1994 },
      { id: 25, title: "Крёстный отец", imdb: 9.2, year: 1972 },
      { id: 27, title: "Крёстный отец 2", imdb: 9, year: 1974 },
      { id: 26, title: "Побег из Шоушенка", imdb: 9.3, year: 1994 },
      { id: 1047, title: "Тёмный рыцарь", imdb: 9, year: 2008 },
    ];
    expect(res).toEqual(ex);
  });
});
