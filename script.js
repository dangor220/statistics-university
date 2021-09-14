let str = prompt('Введите значения выборки через запятую')
let arrMap = str.split(',');
let arr = arrMap.map(Number).sort((a,b) => a - b);

// Частота
let num = arr.length;


// Среднее
function medium(arr) {
  let medium = 0;
  for (const iterator of arr) {
    medium += iterator;
  }

  return  parseFloat((medium / arr.length).toFixed(2))
}

// Дисперсия
function disp(arr, medium) {
  let newArr = [];
  let sumArr = 0;
  for (const iterator of arr) {
    newArr.push(Math.pow((iterator - medium), 2))
  }
  for (const iterator of newArr) {
    sumArr += iterator;
  }
  return parseFloat(Math.sqrt(sumArr / num).toFixed(1))
}

// Медиана
function mediana(arr) {
  let mediumMediand = num / 2;
  return (arr[Math.round(mediumMediand)] + arr[Math.round(mediumMediand) - 1]) / 2 ;
}

// 75-процентиль
function sevenfiveProc(arr) {
  return arr[Math.round(((arr.length * 75) / 100)) - 1];
}

// 25-процентиль
function twofiveProc(arr) {
  return arr[Math.round(((arr.length * 25) / 100) - 1)];
}


// // Гауссово распределение 
// function gaus(disp, medium, arr) {

//   let newArr = [];
//   let sumArr = 0;
//   for (const iterator of arr) {
//     newArr.push(Math.pow((iterator - medium), 2))
//   }
//   for (const iterator of newArr) {
//     sumArr += iterator;
//   }

//   let step = Math.exp((1/2) * ((sumArr)/disp));
//   let gaus = (1 / (disp * Math.sqrt(2 * Math.PI)));
//   let pow = Math.pow(gaus, step);

//   return pow;
// }

// console.log(gaus(disp(arr, medium(arr)), medium(arr), arr));
console.log(arr);
console.log('Среднее значение: ',  medium(arr));
console.log('Дисперсия: ', disp(arr, medium(arr)));
console.log('Медиана: ', mediana(arr));
console.log('75-процентиль: ', sevenfiveProc(arr));
console.log('25-процентиль: ', twofiveProc(arr));