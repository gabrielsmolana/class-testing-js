class Car {
  static COLORS = [];
  static instancesCount = 0;

  constructor(brand, color) {
    this.brand = brand;
    if (color) {
      this.color = color;
    } else {
      this.color = Car.COLORS[Car.instancesCount % Car.COLORS.length];
    }
    Car.instancesCount++;
  }
}

module.exports = Car;
