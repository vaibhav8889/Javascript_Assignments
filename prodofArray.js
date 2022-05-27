function prod(n){
    if(n.length === 0){
        return 1;
    }
    else{
        a = n[0];
        b = n.shift();
        return a * prod(n)
    }

    
}
console.log(prod([1,2,3,4,5]));