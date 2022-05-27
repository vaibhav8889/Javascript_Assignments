function productOfArray(a){
    let prod = 1;
    for (let i =0; i<a.length; i++){
        prod = prod * a[i];
    }
    return prod;
}
console.log(productOfArray([3,34,5,5,5,6,63,]));