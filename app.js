// Reverse String
const name="Abarna";
const array=[];
let reverseString=""
for(i=name.length-1;i>=0;i--){
    array.push(name[i]);
    reverseString=`${reverseString}${name[i]}`
}
const reverseArray=array.join("");
console.log(name,reverseArray,reverseString)