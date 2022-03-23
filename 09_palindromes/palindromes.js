function revertString(string) {
    let output = [];
    for (let i = string.length -1; i >= 0; i--){
        output.push(string[i]);
    }
    return output.join("").toLowerCase();
};
function convertString(string) {
    const regex = /[\s!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
    return string.toString().replace(regex, '');
  
}

const palindromes = function (string) {
    const stringArray = string.split("");
    if (convertString(string.toLowerCase()) == revertString(convertString(stringArray)))
    {
        return true;
    }    
    return false; 
    
};
console.log(palindromes("A car, a man, a maraca."));
console.log(palindromes("racecar!"));
console.log(revertString(convertString("A car, a man, a maraca.")))
// Do not edit below this line
module.exports = palindromes;
