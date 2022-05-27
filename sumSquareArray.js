function sumofSquare(arr){
    if(arr.length === 0){
        return 0;
    }
    else{
        let a = arr[0];
        let b = arr.shift();
        if (Array.isArray(a)){
            return (sumofSquare(a) * sumofSquare(arr));
        }
        return a * a + sumofSquare(arr);
    }
}
console.log(sumofSquare([1,2,3,4,5,6]));