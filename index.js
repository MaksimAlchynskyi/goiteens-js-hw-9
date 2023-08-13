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

for (i = 0; i = numbersss.length; i++) {
    console.log(numbersss[i]);
}
