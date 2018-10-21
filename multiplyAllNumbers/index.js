const multiplyAllNumbers = arr =>
  arr.map((item, index) =>
    arr.reduce((acc, _item, _index) => (index === _index ? acc : acc * _item), 1)
  );

console.warn(multiplyAllNumbers([1, 2, 3, 4, 5]));
