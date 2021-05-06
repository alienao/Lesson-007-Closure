// 9.Given an array of numbers. Find the sum of numbersʼ quadratic which are even.

function quadraticNumSum(arrNum){
    let sum=0;
for (let item of arrNum){
    if (Math.sqrt(item)%2===0){
sum +=item
    }
}
return sum;
}

quadraticNumSum([4, 16, 36]);
