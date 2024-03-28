import { test, expect } from "@jest/globals";

import getData from "../reciveData";

test("testing recived data from file", () => {
  const data = getData();
  const ex = {
    id: 26,
    title: "Побег из Шоушенка",
    imdb: 9.3,
    year: 1994,
  };
  const res = data;
  expect(res[0]).toEqual(ex);
});
