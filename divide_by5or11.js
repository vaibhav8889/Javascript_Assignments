let a = 121;
if (a % 5 === 0){
    if(a % 11 === 0){
        console.log("number is divisible by both 5 and 11");
    }else{
    console.log("number is divisible bye 5");
    }
}else if(a % 11 === 0){
    console.log("number is divisible by 11");
}
else{
    console.log("number is not divisible by 5 or 11");
}