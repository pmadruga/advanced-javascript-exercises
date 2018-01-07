function findMissingPositive(array) {
  return array.sort().reduce((acc, value) => {
    if (value > 0 && acc !== value) {
      return acc;
    }

    return acc + 1;
  }, 1);
}

findMissingPositive([1, 2, 0]);
findMissingPositive([3, 4, -1, 1]);
