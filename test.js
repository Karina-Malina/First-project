// 6 задача
let sum = 0;
let number = 0;

for (let i = 0; i < 99; i += 2) {
    sum += i;
    number += 1;
}

console.log("Сумма четных чисел " + sum);
console.log("Количество четных чисел " + number);

// 7 задача
let x = Math.floor(Math.random() * (100 - 0 + 1)) + 0;

if (x>1) {
for (let i=2;i<x;i++) {
    if (x%i===0) {
        console.log(x + " составное число");
        break;
    } else if (i==x-1) {
        console.log(x + " простое число");
    }
}
} else if (x==1) {
    console.log(x + " простое число");
} else {
    console.log("Неизвестное значение");
}

// 7.5 задача
let count = 150;
let root;

root=count**(1/2);
console.log(Math.floor(root));


// 8 задача
let n = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
let factorial = 1;

for (let i=1; i<=n; i++) {
    factorial *= i;
}
console.log(factorial);

// 9 задача
let b = 28464;
let result = 0;

while (b !==0) {
    result+= b%10;
    b = Math.floor(b/10);
}
console.log(result);

// 10 задача
let num = 3651;
let rev = 0;

while (num !==0) {
    rev *=10;
    rev += num%10;
    num = Math.floor(num/10);
}
console.log(rev); 