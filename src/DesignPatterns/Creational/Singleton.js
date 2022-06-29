let instance;

class Printer {
  constructor(pages) {
    this.display = function () {
      return `Connected to the printer. You want ${pages} to be printed`;
    };
  }

  static getInstance(numOfPages) {
    if (!instance) {
      instance = new Printer(numOfPages);
    }
    return instance;
  }
}

let obj1 = Printer.getInstance(2);
console.log(obj1.display());

let obj2 = Printer.getInstance(3);
console.log(obj2.display());

console.log(obj1 === obj2);
