// 1.Create a function that implements partial sum
// sum(1)(2); // 3
// const addOne = sum(1);
// addOne(2); // 3
// const addTen = sum(10);
// addTen(2); // 12
// addOne(4); // 5
// addTen(10); // 20

function sum(a){
    return function(b){
      return a+b;
    }
  }
  sum(1)(2);






