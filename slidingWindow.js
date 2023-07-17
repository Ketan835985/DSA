let arr = [1,2,3,4,7,1,5,6,25,7,45,9,1]


function findMaximumArr(arr){
    let map = new Map()
    let low = 0
    let high = 0
    let maxCount = 0
    let count = 0
    while(high < arr.length){
        map.set(arr[high], (map.get(arr[high])||0)+1)
        if(map.get(arr[high])>1){
            count = 0 
            low = high
        }
        else{
            count++
        }

        maxCount = Map.max(maxCount, count)

        high++
    }

    return maxCount
}
