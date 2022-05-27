let a =[20, 30, 40,50, 60,25,15,2];
let n = a.length;


for (let i =0; i<n; i++){
    let x =0;
   for(let j = i+1; j< n; j++){
       if (a[i] > a[j]){
            x =a[i];
            a[i] = a[j];
            a[j] = x;
       }
   }

}
console.log(a[n-1]);