class Fruit {
    constructor(id, name, color) {
      this.id = id;
      this.name = name;
      this.color = color;
    }
  }

const fruits = [
new Fruit(1, 'Apple', 'Red'),
new Fruit(2, 'Banana', 'Yellow'),
new Fruit(3, 'Grape', 'Purple'),
new Fruit(4, 'Orange', 'Orange'),
new Fruit(5, 'Strawberry', 'Red'),
];

fruits.sort((a, b) => a.color.localeCompare(b.color));

module.exports = {
  Fruit,
  fruits,
};