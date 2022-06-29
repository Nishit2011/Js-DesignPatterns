class RotiFactory {
  constructor(choiceOfRoti) {
    this.createRoti = function (choiceOfRoti) {
      let roti;
      if (choiceOfRoti === "naan") {
        roti = new Naan();
      } else if (choiceOfRoti === "kulcha") {
        roti = new Kulcha();
      } else if (choiceOfRoti === "phulka") {
        roti = new Phulka();
      }
      return roti;
    };
  }
}

class Naan {
  constructor() {
    this.typeOfRoti = "naan";
    this.message = function () {
      return `You chose ${this.typeOfRoti}`;
    };
  }
}

class Kulcha {
  constructor() {
    this.typeOfRoti = "kulcha";
    this.message = function () {
      return `You chose ${this.typeOfRoti}`;
    };
  }
}

class Phulka {
  constructor() {
    this.typeOfRoti = "phulka";
    this.message = function () {
      return `You chose ${this.typeOfRoti}`;
    };
  }
}

const myRoti = new RotiFactory();
const phulka = myRoti.createRoti("phulka");
console.log(phulka.message());

const naan = myRoti.createRoti("naan");
console.log(naan.message());
