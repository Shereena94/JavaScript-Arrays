//Check if All Elements in an Array are Unique

let array=[2,3,4,5,6];
function unique(arr){
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
           if(arr[i]===arr[j]){
            return false;
           }
        }
    }
    return true;
}
console.log(unique(array));








// Find the Second Largest Number in an Array