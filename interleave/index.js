function newInterLeave(array) {
  const midPosition = Math.round(array.length / 2) - 1;

  return array.reduce((acc, val, index, arr) => {
    acc.push(val);

    if (index !== midPosition) {
      acc.push(arr.pop());
    }

    return acc;
  }, []);
}

newInterLeave([1, 2, 3, 4, 5]);
