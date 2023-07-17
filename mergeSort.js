let arr = [86, 69, 85, 36, 45, 96, 85]

//============================================== using recursion========================================

function merge(arr1, arr2) {
    let mergedArr = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            mergedArr.push(arr1[i]);
            i++;
        }
        else {
            mergedArr.push(arr2[j]);
            j++;
        }
    }
    while (i < arr1.length) {
        mergedArr.push(arr1[i]);
        i++;
    }
    while (j < arr2.length) {
        mergedArr.push(arr2[j]);
        j++;
    }
    return mergedArr;
}
function mergeSort(arr) {
    if (arr.length == 1) {
        return arr;
    }
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
}

console.log(mergeSort(arr))