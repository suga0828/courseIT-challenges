// 999 - IM
// 784 - DCCLXXXIV
// 39 - XXXIX
// 89 - VXXXIX

const romans = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
};

const romanEntries = Object.keys(romans).reverse();

const romanValues = Object.values(romans).reverse();

let intInRoman = '';

function intToRoman(num) {
  let prevIntInRoman = num;
  for (let i = 0; i < romanValues.length; i++) {
    if (num / romanValues[i] >= 1) {
      if (num / romanValues[i] > 3) {
        if (Number.isInteger(num % 9)) {
          intInRoman += String(romanEntries[i]) + String(romanEntries[i - 2]);
          return;
        } else {
          intInRoman += String(romanEntries[i]) + String(romanEntries[i - 1]);
        }
      } else {
        for (let e = 0; e < parseInt(num / romanValues[i]); e++) {
          intInRoman += String(romanEntries[i]);
        }
      }
      prevIntInRoman = prevIntInRoman % romanValues[i];
      intToRoman(prevIntInRoman);
      break;
    }
  }
  return intInRoman;
}

console.log(intToRoman(9));
