let a = "apr"
if(a === "jan" || a === "mar" || a === "may" || a === "jul" || a === "aug" || a === "oct" || a === "dec"){
    console.log("31 days in",a);
}else if(a === "feb"){
    console.log("28 or 29 days in",a);
}else{
    console.log("30 days in",a);
}