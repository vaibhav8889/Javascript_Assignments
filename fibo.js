function fibonacci(n){
  if(n <=1){
      return n;
  }
 
  else{
    return (fibonacci(n-1) + fibonacci(n-2));
  }
}
let n =10;
if (n <= 0){
    console.log("Eter a positive number");

}
else{
    
    for(let i =0; i <n; i++ ){
        console.log(fibonacci(i));
    }
}