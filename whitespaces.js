function removeWhitespaces(a){
    b = "";
    for(let i= 0; i < a.length; i++){
            if(a[i+1] === " " && a[i] === " "){
                a = a.replace(" ","");
            }else{
                b = b + a[i];
            }
        
    }    
    return b;
}
console.log(removeWhitespaces("    a man       who   knew       infinity"));