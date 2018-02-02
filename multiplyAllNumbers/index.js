const multiplyAllNumbers = (numbers) => {
  const arrayProduct = numbers.reduce((prev, value) => prev * value, 1);

  return numbers.map(value => arrayProduct / value);
};

multiplyAllNumbers([1, 2, 3, 4, 5]);
