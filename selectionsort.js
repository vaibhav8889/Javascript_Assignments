function swap(arr,a,b){
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}
const arr = [23,12,65,87,15];
function selection(arr){
    for(let i = 0;i<=arr.length-1;i++){
        let minIndex = arr[i];
        for(let j = i +1;j<arr.length;j++){
            if(arr[j]<minIndex){
                minIndex = arr[j];
                swapIndex = j;
            }
        }
        swap(arr,swapIndex,i);
           // let temp = arr[swapIndex];
            //arr[swapIndex] = arr[i];
            //arr[i] = temp;       
    }
    console.log(arr);
}
selection(arr);