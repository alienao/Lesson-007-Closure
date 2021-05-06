// 4.Create a function printAfter that calls its argument after printing hello world
// const print = () => console.log("Elon Musk");
// printAfter(print);
// // 'hello, world'
// // 'Elon Musk'
function printAfter(str2){
    const print= ()=>{
        console.log("hello world");
        console.log(str2);
        
    }
    return print;
}
let after=printAfter('Elon Musk');
console.log(after());
