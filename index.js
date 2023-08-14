"use strickt"

const numbers = [1, 2, 3];

numbers[1] = 10;
console.log(numbers);

const strings = ["Kiwi", "Husk", "Nudy"];
strings.splice(2, 0, "Bob");
console.log(strings);

const numberss = [5, 10, 99, 1];
let totalSum = 0;

for (let i = 0; i < numberss.length; i++) {
    if (typeof numberss[i] === 'number') {
        totalSum += numberss[i];
    }
}
console.log(totalSum);

const numbersss = [5, 10 ,15 ,20, 25];

for (let j = 0; j < numbersss.length; j++) {
    console.log(numbersss[j]);
}

const stringss = [
"Ko", 
"nygu", 
"Jolul", 
"Firuss", 
"Nobejos"
];

for (let k = 0; k < stringss.length; k++) {
    if (stringss[k].length > 5) {
        console.log(stringss[k]);
    }
}

const numberssss = [1, 2, 3, 6, 100, 101, 55, 1000, 1111, 2000];
let maxNumber = numberssss[0];

for (let l = 1; l < numberssss.length; l++) {
    if (numberssss[l] > maxNumber) {
        maxNumber = numberssss[l];
    }
}
console.log("Найбільше число в масиві =>", maxNumber);

const numbersssss = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = [];
for (let m = 0; m < numbersssss.length; m++) {
    if (numbersssss[m] % 2 === 0) {
      evenNumbers.push(numbersssss[m]);
    }
  }
console.log("Парні числа =>", evenNumbers);