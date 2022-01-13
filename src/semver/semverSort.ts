export const semverSort = (array: Array<string>): Array<string> => {
  const sortString = (a: Array<string>, b: Array<string>): any => {
    for (let i = 0; i < array.length - 1; i++) {
      if (a.length === 1 || b.length === 1) {
        if (Number(a[0]) > Number(b[0])) {
          return 1;
        }
        return a.length > b.length ? 1 : -1;
      }
      if (Number(a[i]) > Number(b[i])) return 1;
      if (Number(a[i]) < Number(b[i])) return -1;
      if (Number(a[i]) === Number(b[i]))
        sortString(a.slice(i + 1), b.slice(i + 1));
    }
  };
  const result: Array<string> = array
    .map((str: string) => str.split("."))
    .sort(sortString)
    .map((item) => item.join("."));
  return result;
};
