// https://www.youtube.com/watch?v=DP0NvIdWrQM&list=PLM7wFzahDYnGF4WqYaSuwnItYDEBakTDS&index=12

const map = new Map();

map.set('0', '1');
map.set('s2', '2s');
map.set('3s', 's3');

const arr = [...map.values()];
const res = arr.map(item => parseInt(item));
console.log(res);