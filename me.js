//Let array=[1,2,5,1,6,3,7,8,8,5,4,4,1,5,2,4],Count the repeating elements and make a new array...,Expected output :new array=[3,2,3,2,3]

let duparray = [1,2,5,1,6,3,7,8,8,5,4,4,1,5,2,4];
  count = 0; 
const obje={} 
for (item of duparray){ 
    for( item2 of duparray){ 
        if (item==item2){ 
            count+=1; 
            obje[item]=count ;
 
        } 
 
    } 
    count=0; 
 
} 
let newarray2=[]; 
for (key in obje){ 
    if(obje[key]>=2){ 
   newarray2.push(obje[key]) 
} 
} 
// console.log(obje); 
 
console.log(newarray2);

// let dupArray=[1,2,1,5,6,5,7,8,7,1,7,7]; //expect output [3,2,4]
// let newArr=[];
// for(let i=0;i<dupArray.length;i++){
//     for(let j=i+1;j<dupArray.length;j++){
//         if(dupArray[i]==dupArray[j]){

           
            

           

            
//         //     let flag=false;
//         //     for(k=0;k<newArr.length;k++){
//         //         if(newArr[k]==dupArray[i]){
//         //             flag=true;
                    
                
//         //         }
                
//         //    }if(flag==false){
//         //         newArr.push(dupArray[i]);
//         //             console.log(newArr);

//         //    }
            
            
//         }

//     }
// }console.log(newArr);




//Find the sum of squares of elements in an array?

let a=[2,4,6,8];
let sum=0;
for(let i of a){
    sum=sum+i**2;
}console.log(sum);