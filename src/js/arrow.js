export default class Arrow {
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
    const thArr = Array.from(
      this._element.querySelector("tr").querySelectorAll("th")
    );
    const el = thArr.find((res) => {
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
