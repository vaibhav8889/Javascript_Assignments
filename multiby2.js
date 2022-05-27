function multi(a){
    for (let i =0; i<a.length; i++){
        a[i] = a[i] * 2;
    }
    return a;
}
console.log(multi([2,3,4,5,6]));