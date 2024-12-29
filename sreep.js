//To create a new array where each element is double the value of the original array's elements.

let numb=[10,20,30,40,50,60];
let double=1;
let doub=[];

for(let i=0;i<numb.length;i++){
    double=numb[i]*2;
    doub.push(double)


}console.log(doub);


//to create a new array by replacing all negative numbers with zero

let array=[10,15,12,13,19,21,26,33];
let arr=[];
for (let i=0;i<array.length;i++){
    if(array[i]%2!==0){
        array[i]=0;
        
    }arr[i]=array[i];
}console.log(arr);