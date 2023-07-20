/*Given a string s consisting only of characters a, b and c.

Return the number of substrings containing at least one occurrence of all these characters a, b and c*/



function numOfSubstr(s){
    let res = 0
    let left = 0
    let right = 0
    let map = new Map()
    let prefix = 0
    let noOfDistinct = 0
    while(right < s.length){
        map.set(s[right],(map.get(s[right])||0)+1)
        if(map.get(s[right]) == 1){
            noOfDistinct++
        }
        while(map.get(s[left])>1 && left<right){
            map.set(s[left],(map.get(s[left])-1))
            left++
            prefix++
        }
        if(noOfDistinct==3){
            res += prefix+1
        }
    }
    return res
}

console.log(numOfSubstr("abcbac"))