// write a program to Count the number of even and odd numbers

let num=[10,13,45,98,78,26,35,33,60];
let count1=0;
let count2=0;
for(let element of num){
    if(element%2==0){
        count1++;
    }else{
        count2++;
    }
}console.log(`num array have ${count1} even numbers and ${count2} odd numbers`);



//write a program to Remove the first element from an array

let a=[10,20,30,40,50];
a.shift();
console.log(a);