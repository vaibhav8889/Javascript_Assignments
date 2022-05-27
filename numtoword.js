let num = 208;
let rem = 0;

while (num){
    if(num>2000){
    rem = num % 2000;
    num = num / 2000;
    }
    else if(num > 500){ 
        rem %= 500;
        num /= 500;
    }
    else if(num > 200){
        rem %= 200;
        num /= 200;
    }
    else if(num > 100){
        rem %= 100;
        num /= 100;
    }
    else if(num > 50){
        rem %= 50;
        num /= 50;
    }
    else if(num > 20){
        rem %= 20;
        num /= 20;
    }
    else if(num > 10){
        rem %= 10;
        num /= 10;
    }
    else if(num > 5){
        rem %= 5;
        num /= 5;
    }
    else if(num > 2){
        rem %= 2;
        num /= 2;
    }
    else{
        rem %= 1;
        num /= 1;
    }
    switch(rem){
        case 1:
            console.log("one");
            break;
    
        case 2:
            console.log("two");
            break;
        case 3:
            console.log("three");
            break;
        case 4:
            console.log("four");
            break;
        case 5:
            console.log("five");
            break;
        case 6:
            console.log("six");
            break;
        case 7:
            console.log("Seven");
            break;
        case 8:
            console.log("eight");
            break;
        case 9:
            console.log("nine");
            break;
        case 10:
            console.log("ten");
            break;
        case 11:
            console.log("eleven");
            break;
        case 12:
            console.log("twelve");
            break;
        case 13:
            console.log("thirteen");
            break;
        case 14:
            console.log("fourteen");
            break;
        case 15:
            console.log("fifteen");
            break;
        case 16:
            console.log("sixteen");
            break;
        case 17:
            console.log("seventeen");
            break;
        case 18:
            console.log("eighteen");
            break;
        case 19:
            console.log("nineteen");
            break;
        case 20:
            console.log("twenty");
            break;
        case 30:
            console.log("thirty");
            break;
        case 40:
            console.log("fourty");
            break;
        case 50:
            console.log("fifty");
            break;
        case 60:
            console.log("sixty");
            break;
        case 70:
            console.log("seventy");
            break;
        case 80:
            console.log("eighty");
            break;
        case 90:
            console.log("ninety");
            break;
        case 100:
            console.log("hundred");
            break;
        default:
            console.log("zero");

    }
                                        
}
