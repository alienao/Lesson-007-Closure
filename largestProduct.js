// 11. Given an array of integers, find the pair of adjacent elements that has the largest product and return that
// product.

function largestProduct(arr){
   let result = 0;
   for (let i in arr){
       if(arr[(i)]* arr[parseInt(i) + 1]>result){
        result = arr[(i)]* arr[parseInt(i) +1 ];
       }
   }
return result;
}

largestProduct([1,7, 10, 8, 2, 5]);
