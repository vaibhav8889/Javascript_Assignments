function maximum(a,b){
    if (a>b){
        return a;
    }else if(a===b){
        return "numbers are equal";
    }else{
        return b;
    }
}
console.log(maximum(10,23));