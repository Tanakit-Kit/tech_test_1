export function merge(
  collection_1: number[],
  collection_2: number[],
  collection_3: number[]
): number[] {
  const result: number[] = [];

  // I am going to use three pointers to solve this problem
  let i = 0;
  let j = 0;
  let k = collection_3.length - 1;

  while (i < collection_1.length || j < collection_2.length || k >= 0) {
    let val1 = Infinity;
    let val2 = Infinity;
    let val3 = Infinity;

    if (i < collection_1.length) val1 = collection_1[i];
    if (j < collection_2.length) val2 = collection_2[j];
    if (k >= 0) val3 = collection_3[k];

    if (val1 <= val2 && val1 <= val3) {
      result.push(val1);
      i++;
    } else if (val2 <= val1 && val2 <= val3) {
      result.push(val2);
      j++;
    } else {
      result.push(val3);
      k--;
    }
  }

  return result;
}