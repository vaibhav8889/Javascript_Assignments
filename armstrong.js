let a = 371;
let sum = 0;
let b = 0;
let c = a;
while(a){
    b = a % 10;
    sum = sum + (b * b * b);
    a = Math.floor(a / 10);
}
if(sum === c){
    console.log("Armstrong Number");
}
else{
    console.log("Not a Armstrong number");
}