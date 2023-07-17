let x = 5.5

if(typeof x == 'number' && !isNaN(x)){
    if(Number.isInteger(x)){
        console.log("integer")
    }
    else{
        console.log("not integer, it is a float number")
    }
}
else{
    console.log("not a number")
}