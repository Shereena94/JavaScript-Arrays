//Write a program to move all zeros in an array to the end while maintaining the relative order of other elements

let num=[12,0,54,65,0,0,85,90,4,0,89,0,87,25,0];
let num1=[];
let num2=[];
let num3=[];
for(let i=0;i<num.length;i++){
    if(num[i]==0){
        num1.push(num[i]);
    }else{
        num2.push(num[i]);
    }
}
for(let element of num2){
    num3.push(element);
}
for(let element of num1){
    num3.push(element);
}console.log(num3);


//Write a program to check if an array is the same when reversed.

let array1=[1,3,5,2,5];
let array2=array1.reverse();

// console.log(array2);
for(let i=0;i<array1.length;i++){
    for (let j=0;j<array2.length;j++){
        if(array1[i]==array2[j]){
            
        }
        }
}console.log(array1[i]==array2[j]?"array same0":"array not same")