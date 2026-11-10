import { merge } from '../src/merge';

describe('merge function unit tests', () => {
  test('The system should merge three sorted arrays into one ascending array', () => {
    const c1 = [1, 5, 7];
    const c2 = [2, 4, 8];
    const c3 = [9, 6, 3, 0];
    expect(merge(c1, c2, c3)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  test('The system should handle empty arrays correctly', () => {
    expect(merge([], [], [])).toEqual([]);
    expect(merge([1, 3, 5], [], [])).toEqual([1, 3, 5]);
    expect(merge([], [2, 4, 6], [])).toEqual([2, 4, 6]);
    expect(merge([], [], [5, 3, 1])).toEqual([1, 3, 5]);
  });

  test('The system should handle arrays with duplicate numbers', () => {
    const c1 = [6, 6, 7, 7];
    const c2 = [1, 2, 3];
    const c3 = [6, 5, 4, 3];
    expect(merge(c1, c2, c3)).toEqual([1, 2, 3, 3, 4, 5, 6, 6, 6, 7, 7]);
  });

  test('The system should handle arrays of different lengths', () => {
    const c1 = [10, 20];
    const c2 = [1, 2, 3, 4, 5];
    const c3 = [100, 15, 0];
    expect(merge(c1, c2, c3)).toEqual([0, 1, 2, 3, 4, 5, 10, 15, 20, 100]);
  });
});