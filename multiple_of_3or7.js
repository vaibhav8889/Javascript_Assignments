let a = 21;
if (a % 3 === 0){
    if(a % 7 === 0){
        console.log("number is multiple of both 3 and 7");
    }else{
    console.log("number is multiple of 3");
    }
}else if(a % 7 === 0){
    console.log("number is multiple of 7");
}
else{
    console.log("number is not multiple of 3 or 7");
}