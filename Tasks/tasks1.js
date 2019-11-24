//1 задачка
let d = +prompt("Введите элемент массива1");
let e = +prompt("Введите элемент массива2");
let f = +prompt("Введите элемент массива3");
let summ = 0;
let arr = [d, e, f];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 0) {
	  summ += arr[i];
  }    
}
alert(summ);


//2 задачка
let a = +prompt("Введите a");
let b = +prompt("Введите b");
let c = +prompt("Введите c");
let maximum, result;
if (a*b*c > a+b+c) {
    maximum = a*b*c;
} else {
    maximum = a+b+c;
}
result = maximum + 3;
alert(result);

//3 задачка
let x = +prompt("Введите x");
let y = +prompt("Введите y");
if (x > 0 && y > 0) {
    alert("1 четверть");
} else if (x < 0 && y > 0) {
    alert("2 четверть");
} else if (x < 0 && y < 0) {
    alert("3 четверть");
} else if (x > 0 && y < 0) {
    alert("4 четверть");
}


//4 задачка
let min, max, minIndex, maxIndex;
let myArray = [1, -2, 3, 4, 5, 16];
min = myArray[0];
maxIndex = 0;
minIndex = 0;
  max = min;
  for (let i = 1; i < myArray.length; ++i) {
      if (myArray[i] > max) {
        max = myArray[i];
        maxIndex = i;
      }
      if (myArray[i] < min) {
          min = myArray[i];
          minIndex = i;
      }
  }
  console.log(max);
  console.log(maxIndex);
  console.log(min);
  console.log(minIndex);


//5 задачка
let number = 0;
let mass = [2, -5, 3, 0, 1, 4, 7, 8, -3];
for (let i = 1; i < mass.length; i+= 2) {
    number += mass[i]; 
}
console.log(number);