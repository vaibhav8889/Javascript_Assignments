
function vowels(a){
    let b = "aeiouAEIOU";
    let total =0;
    for(let i =0; i< b.length; i++){
        if(b.indexOf(a[i]) != -1){
        total = total + 1
        }
    }
    return total;
}
console.log(vowels("vaibhav"));