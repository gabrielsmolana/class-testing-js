const Car = require("./car");

const capitalizeString = (string) => {
  return `${string[0].toUpperCase()}${string.slice(1)}`;
};

class CarFactory {
  #supportedBrands = ["Fiat", "Lancia", "Ford", "Subaru"];

  constructor(name, brands) {
    this.name = name;

    brands = [brands];

    const flattenedBrands = brands.flat(Infinity).map(capitalizeString);
    const unsupportedBrands = flattenedBrands.filter(
      (brand) => !this.#supportedBrands.includes(brand)
    );

    if (unsupportedBrands.length > 0 || !this.#supportedBrands) {
      throw new UnsupportedBrandError(
        `Brand not supported: '${unsupportedBrands.join(", ")}'`
      );
    }

    this.brands = flattenedBrands;
  }

  createCar(brand) {
    if (
      (brand === undefined && this.brands.length > 1) ||
      (brand !== undefined && !this.brands.includes(capitalizeString(brand)))
    ) {
      throw new UnsupportedBrandError(
        "Factory does not have a brand or do not support it"
      );
    }

    return new Car(
      brand === undefined
        ? this.brands.toString()
        : capitalizeString(brand.toString())
    );
  }

  *createCars(...args) {
    if (args.length == 1) {
      for (let i = 0; i < args[0]; i++) {
        yield this.createCar(this.brands[i % this.brands.length]);
      }
    } else {
      for (let i = 0; i < args.length; i++) {
        for (let j = 0; j < args[i][0]; j++) {
          yield this.createCar(args[i][1]);
        }
      }
    }
  }

  get factoryName() {
    return `${this.name} produces: ${this.brands.join(", ")}`;
  }
}

class UnsupportedBrandError extends Error {}

module.exports = {
  UnsupportedBrandError,
  CarFactory,
};
