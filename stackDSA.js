// stack == \
let data = []
let max = 3
let current = data.length

function push(val) {
    if (current <= max) {
        data[current] = val
        current++
        console.log(data)
    }
    console.error( "Stack overflow");
}  

push(20)
push(20)

push(20)

push(20)
