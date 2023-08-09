function allSubArray(arr) {
    const subArray = []
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            subArray.push(arr.slice(i, j))
        }
    }
    return subArray
}


// console.log(allSubArray([1, 5, 7, 9]))


// maximum sum of sub arrays
function maximumSumOfArray(arr){
    let maxEndingHere = arr[0];
    let maxSoFar = arr[0];

    for (let i = 1; i < arr.length; i++) {
        // console.log(maxEndingHere+arr[i])
        maxEndingHere = Math.max(arr[i], maxEndingHere + arr[i]);
        maxSoFar = Math.max(maxSoFar, maxEndingHere);
    }

    return maxSoFar;
}

console.log(maximumSumOfArray([1,5,7,9]))