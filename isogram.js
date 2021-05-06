// 8.Determine if a word or phrase is an isogram. An isogram (also known as a "non pattern word") is a word
// or phrase without a repeating letter

function Isogram(str){
    let myStr = str.toLowerCase();
    let mySet = new Set();

    for(let i = 0; i < myStr.length; i++){
        if(mySet.has(myStr[i])){
            return false;
            break;
        }
        else{
            mySet.add(myStr[i]);
        }
    }
    return true;
}
Isogram("Artak");
Isogram("Armen");
