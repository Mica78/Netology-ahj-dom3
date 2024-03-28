export default class Sorter {
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
