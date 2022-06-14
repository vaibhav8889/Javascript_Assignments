function removeWhitespaces(a){
    for(let i= 0; i < a.length; i++){
            if(a[i] === "@" || a[i] === "#" || a[i] === "$" || a[i] === "%" || a[i] === "&"){
                a = a.replace(a[i],"")
            }
        
    }    
    return a;
}
console.log(removeWhitespaces("a ma&n who k@new infinity"));