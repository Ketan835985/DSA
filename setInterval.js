let count = 0
function setFunction(){
    return new Promise((resolve, reject) =>{
        
    })
}

setFunction()

setTimeout(() =>{
    setInterval(() =>{
        count++;
        console.log(`items: ${count}`)
    }, 1000)
    console.log(`items Time out`)
}, 5000)