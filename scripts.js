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

// ----------------------------//
function box(n) {
  let res = [];
  for (let i = 1; i <= n; i++) {
    if (i === 1 || i === n) {
      res.push("-".repeat(n));
    } else {
      res.push(`"-"${" ".repeat(n-2)}"-"`)
    }
  }
  return res
}
// equals to
const box = n =>  [`-`.repeat(n), ...Array(n - 2).fill(`-${` `.repeat(n - 2)}-`), `-`.repeat(n)];

// -------------------------- //
function rotEnergies(b, jMin, jMax) {
  let arr = [];
  if (b <= 0 || jMin > jMax) {
    return arr
  } else {
    while (jMin <= jMax) {
      arr.push(b * jMin * (jMin + 1));
      jMin++;
    }
  }
  return arr
}
//equals to
function rotEnergies(b, j, k) {
  return b < 0 || j > k || j % 1 !== 0 || k % 1 !== 0 ? [] : Array(k - j + 1).fill(0).map((e, i) => b * (j + i) * (j + i + 1));
}


// ------------------ //
function symDiff(s1, s2){
  let arr1 = [...s1].filter(f=>![...s2].includes(f));
  let arr2 = [...s2].filter(f=>![...s1].includes(f));
return new Set(arr1.concat(arr2))
}
// equals to
const symDiff = (s1, s2) => new Set([...s1, ...s2].filter(x => !s1.has(x) || !s2.has(x)));

// --------------------- //
function translateDate(dateStr) {
  let str = dateStr.split("-").map(e => e.length > 2 ? (e.slice(0, 2) + " " + e.slice(2)).split(" ") : e)
    .flat().map(n => +n + 50)
    .map(s => String.fromCharCode(s))

  return `${str[0]+str[1]}-${str[2]}-${str[3]}`
}
//equals to
function translateDate(s) {
  return s.replace(/\d\d/g, x => String.fromCharCode(+x + 50))
}
