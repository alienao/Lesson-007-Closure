# Tasks

* [Code Recuirement List](https://docs.google.com/document/d/1ruDwdOAXNmJ1WVu5gevdJzh9nbjchpPxpOtAEBbqdrs/edit)

## Required Tasks

* Create a function that implements partial sum

```
sum(1)(2); // 3
const addOne = sum(1);
addOne(2); // 3
const addTen = sum(10);
addTen(2); // 12
addOne(4); // 5
addTen(10); // 20
```

* Write a function redundant that takes in a string str and returns a function thatreturns str.

```
const f1 = redundant("apple");
//f1() ➞ "apple"
const f2 = redundant("pear");
//f2() ➞ "pear"
const f3 = redundant("");
//f3() ➞ ""
```

* Write a function thatreturns an anonymous function, which transforms its input by adding a particular
suffix at the end.

```
add_ly = add_suffix("ly");
add_ly("hopeless"); // "hopelessly"
add_ly("total"); // "totally"
add_less = add_suffix("less");
add_less("fear"); // "fearless"
add_less("ruth"); // "ruthless"
```

* Create a function printAfter that calls its argument after printing hello world

```
const print = () => console.log("Elon Musk");
printAfter(print);
// 'hello, world'
// 'Elon Musk'
```

* Write a function that implements filtering in array

```
const values = [null, true, {}, { name: "Elon" }, "", NaN, 0];
filterFalsyValues(values); // [true, {}, { name: "Elon" }];
filterFalsyValues(["hello", 1233, []]); // ['hello', 1233, []]
```

* Write a function which remove elements with length <= 3

```
filterByLength(["kia", "tesla", "bmw", "mercedes"]); // ['tesla',
'mercedes']
```

* Given an array. Determine whetherit consists only from uniques or not.

* Determine if a word or phrase is an isogram. An isogram (also known as a "non pattern word") is a word
or phrase without a repeating letter.

* Given an array of numbers. Find the sum of numbersʼ quadratic which are even.

* Check whether string is palindrome, or not.

* Given an array of integers, find the pair of adjacent elements that has the largest product and return that
product.

###### Literature

*Available in russian*

* [Variable scope, closure](https://javascript.info/closure)

* [PythonTutor](http://www.pythontutor.com/javascript.html#mode=edit)

