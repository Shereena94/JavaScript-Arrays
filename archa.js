//Square Each Element using array

let array = [10, 12, 14, 15, 20];
let sqArray = [];
for (let value of array) {
  value = value ** 2;
  sqArray.push(value);
}
console.log(sqArray);

//Count Positive and Negative Numbers

let numbers = [1, -8, 5, 6, -7, 5, 9, -7, 12, -45, -85, 25, 98];
let count1 = 0;
let count2 = 0;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    count1++;
  }

  if (numbers[i] < 0) {
    count2++;
  }
}
console.log(`there are ${count1} positive numbers`);
console.log(`there are ${count2} negative numbers`);
