printNumbers(5, 10);

function printNumbers(from, to) {
  const idTimeout = setTimeout(() => printNumbers(from += 1, to), 1000);
  if(from == to) clearTimeout(idTimeout);
  console.log(from);
}