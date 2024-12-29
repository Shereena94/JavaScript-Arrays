//Write a program to replace all odd numbers with ‘*’
let numbers=[2,6,5,9,7,8,3,4,11];
for (let i=0;i<numbers.length;i++){
    if(numbers[i]%2!==0){
        numbers[i]='*';
    }
}console.log(numbers);



//Write a program to find the sum of all the odd numbers in an array

let num=[2,5,4,7,6,3,9];
let sum=0;
for(let j of num){
    if(j%2!==0){
        sum+=j;
    }
}console.log(sum);