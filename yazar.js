// : Cumulative Sums
// Given an array input = [3, 7, 2], create a new array where each element is the cumulative sum of elements up to that index in the original array.
// Expected Output:

// Array: [3, 10, 12]



const naturalNumbers =[];
const manipulatedArray =[];
for (let i = 1; i <= 10; i++){
    naturalNumbers.push(i);
}
let totalProduct=1;
for (let i=0;i<naturalNumbers.length;i++) {
    totalProduct*=naturalNumbers[i];
}
for (let i=0;i<naturalNumbers.length;i++) {
    manipulatedArray.push(naturalNumbers[i]*totalProduct);
}
console.log(naturalNumbers);
console.log(manipulatedArray);






//Find the sum of squares of elements in an array?
let a=[2,4,6,8,10];
let sum=0;
for(let i of a){
    sum=sum+i**2;
}console.log(sum);