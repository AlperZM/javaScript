function compute(n) {
  let odds = [];

  for (let i = 3; i <= n; i++) {
    if (i % 2 === 1) odds.push(i)
  }

  return n % 2 === 0 || n < 3 ? 0 :
    odds.reduce((a, b) => a + 1 / b ** 2, 1)

}
//equals to
function compute(n) {
  return n % 2 === 0 || n < 1 ? 0 : n === 1 ? 1 :
    1 / n / n + compute(n - 2)
}

// ----------------------------- //
  var manCave = function(array) {
  return array.some(s => s.name === 'Raj') ? array.filter(f => f.gender === 'male').map(m => (m.status = 'Single', m)) : array;
}
