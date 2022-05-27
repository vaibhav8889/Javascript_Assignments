function intoCm(num){
return num*2.54;
}

function cmtoIn(num){
    return num/2.54;
}
function convert(fn, num){
    return fn(num)
}

console.log(convert(cmtoIn, convert(cmtoIn,convert(cmtoIn,convert(intoCm, convert(cmtoIn,50))))));
console.log(convert(cmtoIn, convert(cmtoIn,convert(cmtoIn,convert(intoCm, convert(cmtoIn,convert(cmtoIn,50)))))));