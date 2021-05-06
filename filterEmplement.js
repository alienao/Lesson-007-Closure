// 5.Write a function that implements filtering in array
// const values = [null, true, {}, { name: "Elon" }, "", NaN, 0];
// filterFalsyValues(values); // [true, {}, { name: "Elon" }];
// filterFalsyValues(["hello", 1233, []]); // ['hello', 1233, []]

const values = [null, true, {}, { name: "Elon" }, "", NaN, 0];
let newArr=[]
for (value of values){
    if (value){
       newArr.push(value);  
    }
}
console.log(newArr);