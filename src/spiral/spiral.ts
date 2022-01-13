export const spiral = (array: Array<Array<number>>): Array<number> => {
  let sum: Array<any> = [];

  const calculate = (arrayProp: Array<Array<number>>): Array<number> => {
    let result: Array<any> = [];
    const subResult: Array<any> = [];
    arrayProp.forEach((arr, y) => {
      arr.forEach((item, x) => {
        if (y === 0 && x !== arr.length - 1) result.push(item);
        if (y !== arrayProp.length - 1 && x === arr.length - 1)
          result.push(item);
        if (y === arrayProp.length - 1) subResult.push(item);
        if (y !== arrayProp.length - 1 && y !== 0 && x === 0)
          subResult.push(item);
      });
    });
    result = result.concat(subResult.reverse());
    return result;
  };

  let copyArray: Array<Array<number>> = JSON.parse(JSON.stringify(array));

  for (let i = 0; i < array.length - 1; i++) {
    if (i !== 0) {
      copyArray = copyArray.map(
        (arr): Array<number> =>
          (arr = arr.filter(
            (item, index): boolean => index !== 0 && index !== arr.length - 1
          ))
      );
      copyArray = copyArray.filter(
        (arr, index): boolean => index !== 0 && index !== copyArray.length - 1 // eslint-disable-line
      );
    }

    if (copyArray[0]?.length) {
      sum = sum.concat(calculate(copyArray));
    }
  }
  return sum;
};
