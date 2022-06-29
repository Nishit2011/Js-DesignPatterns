class CapitalDB {
  getMyCapitalFromDB(country) {
    if (country === "India") {
      return "New Delhi";
    } else if (country === "Bangladesh") {
      return "Dakha";
    } else if (country === "Pakistan") {
      return "Islamabad";
    } else if (country === "Sri Lanka") {
      return "Colombo";
    } else {
      return "Country not in db";
    }
  }
}

class ProxyCapital {
  constructor() {
    this.capital = new CapitalDB();
    this.cache = {};
  }

  getMyCapital(country) {
    if (!this.cache[country]) {
      let yourCapital = this.capital.getMyCapitalFromDB(country);
      this.cache[country] = yourCapital;
      return `Your capital is fetched from db ${yourCapital}`;
    } else {
      return `Capital from cache ${this.cache[country]}`;
    }
  }
}

const cntry = new ProxyCapital();

console.log(cntry.getMyCapital("Pakistan"));
console.log(cntry.getMyCapital("Pakistan"));
