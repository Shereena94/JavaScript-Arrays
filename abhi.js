//.Create an array of natural number upto 10  and manipulate the array with its each element multiplied by the total product of array

let array=[1,2,3,4,5,6,7,8,9,10];

// let newArr = [];

let mul=1;
let mul1=mul;

for(let elements of array){
    mul*=elements;
}console.log(mul)
for(let i=0;i<array.length;i++){
    mul1=mul*array[i];
   array[i]=mul1;
}console.log(array);





//create a array of natural numbers upto 10 and create a new array having elements sum, product, avg of existing array

let a=[1,2,3,4,5,6,7,8,9,10];
let newA=[];
let sum=0;
let pro=1;
let avg;

for(let j of a){
    sum=sum+j;
    pro=pro*j;
    avg=sum/a.length;
}newA.push(sum);
newA.push(pro);
newA.push(avg);
console.log(newA);
