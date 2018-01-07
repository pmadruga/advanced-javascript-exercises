function multiplyAllNumbers(array) {
  const multiplied = [];

  array.reduce((acc, val, index, arr) => {
    acc = 1;

    arr.map((_val, _index) => {
      if (index !== _index) acc *= _val;
    });

    multiplied.push(acc);
  }, []);

  return multiplied;
}

multiplyAllNumbers([1, 2, 3, 4, 5]);
