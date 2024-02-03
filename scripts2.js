// Script 1
function isMagicThree(array) {
  for (let x of array)
    for (let y of array) for (let z of array) if (x + y + z === 0) return true;
  return false;
}
//equals to
const isMagicThree = (a) => a.some((b) => a.some((c) => a.some((d) => b + c + d === 0)));
