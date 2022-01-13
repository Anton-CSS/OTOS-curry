export default function sum(...params: number[]) {
  let s = 0;
  if (params.length !== 0) {
    s = params.reduce((a, b) => a + b);
  }

  function innerSum(...innerParams: number[]) {
    return sum(...innerParams.concat(s));
  }

  const result = () => s;

  innerSum.toString = result;
  innerSum.valueOf = result;
  return innerSum;
}
