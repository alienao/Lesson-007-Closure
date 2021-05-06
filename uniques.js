// 7.Given an array. Determine whetherit consists only from uniques or not.

function unique(array) {
    return array.filter(function (item, i, arr) {
            return arr.indexOf(item) === i;
        }).length === 1;
}

console.log(unique([1, 1, 1, 1]));
console.log(unique([1, 2, 3, 4]));

