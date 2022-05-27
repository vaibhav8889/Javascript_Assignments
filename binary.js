let a = 10;
let b = "";
while(a != 0){
    b =b+ String(a % 2);

    a = Math.floor(a/2);

}
console.log(b);