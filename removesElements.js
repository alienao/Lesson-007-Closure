// 6.Write a function which remove elements with length <= 3
// filterByLength(["kia", "tesla", "bmw", "mercedes"]); // ['tesla',
// 'mercedes']

function filterByLength(arr){  
const result = arr.filter(item => item.length > 3);
console.log(result);
}

filterByLength(["kia", "tesla", "bmw", "mercedes"]);
