import "./js/table.js";
import "./js/reciveData.js";
import "./js/sorter.js";
import "./js/arrow.js";
import "./css/style.css";
import "./data/data.json";
import "./js/app.js";

import Widget from "./js/app.js";

document.addEventListener("DOMContentLoaded", () => {
  const handler = [
    ["id", "up"],
    ["id", "down"],
    ["title", "up"],
    ["title", "down"],
    ["year", "up"],
    ["year", "down"],
    ["imdb", "up"],
    ["imdb", "down"],
  ];

  const widjet = new Widget(handler, 5000);
  widjet.run();
});
