//You are given an object salaries where the keys are employee names and the values are their respective salaries. Write a code snippet that will increase each employee's salary by 10% and then print the updated salary of each employee.

// let salary={arun:2000, raj:3000, anil:5000};
// let mul=1;
// let sum=0;
// let newSal=[];
// for(let key of salary){
//     mul=salary[key] * 0.10;
//     sum=salary[key] + mul;
//     newSal.push(sum);
// } console.log(newSal[sum]);


let developers={
    fazil:5000,
    ravi:2000,
    govind:200

}


for(let keys in developers){
    let salary=developers[keys]*1.1
    console.log(keys,":",salary);
}









//,Write a program that prints the multiplication table for numbers 1 through 10


let arr=[1,2,3,4,5,6,7,8,9,10];
let mult=1;
for(let i=0;i<arr.length;i++){
    for(j=1;j<=10;j++){
        mult=arr[i] * j;
        console.log(`${arr[i]} x ${j} = ${mult}`);
    }

}
