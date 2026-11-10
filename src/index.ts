import { merge } from './merge';

const c1 = [1, 5, 7];
const c2 = [2, 4, 8];
const c3 = [9, 6, 3, 0]; 

const merged = merge(c1, c2, c3);
console.log('Collection 1 (min -> max):', c1);
console.log('Collection 2 (min -> max):', c2);
console.log('Collection 3 (max -> min):', c3);
console.log('Merged Result (ascending):', merged);