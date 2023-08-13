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

for (i = 0; i < numbersss.length; i++) {
    console.log(numbersss[i]);
}

const stringss = [
"Ko", 
"nygu", 
"Jolul", 
"Firuss", 
"Nobejos"
];

for (i = 0; i < stringss.length; i++) {
    if (stringss[i].length > 5) {
        console.log(stringss[i]);
    }
}

const numberssss = [1, 2, 3, 6, 100, 101, 55, 1000, 1111, 2000];
let maxNumber = numberssss[0];

for (i = 1; i < numberssss.length; i++) {
    if (numberssss[i] > maxNumber) {
        maxNumber = numberssss[i];
    }
}
console.log("Найвище число в масиві =>", maxNumber);

const numbersssss = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = [];
for (i = 0; i < numbersssss.length; i++) {
    if (numbersssss[i] % 2 === 0) {
      evenNumbers.push(numbersssss[i]);
    }
  }
console.log("Парні числа =>", evenNumbers);