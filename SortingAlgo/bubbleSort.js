let arr = [45,85,96,52,2,5,75,98]

// function bubbleSort(arr) {
//     for (var i = 0; i < arr.length; i++) {
//         for (var j = i+1; j < arr.length; j++) {
//             if (arr[i] > arr[j]) {
//                 var temp = arr[i]
//                 arr[i] = arr[j]
//                 arr[j] = temp
//             }
//         }
//     }
//     return arr
// }



function bubbleSort(arr) {
    for(let i =0; i< arr.length-1; i++){
        let swap  = false;
        for(let j = 0; j< arr.length-1-i; j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
                swap = true
            }
        }
        if(swap === false){
            break;
        }
    }
    return arr
}

console.log(bubbleSort(arr))