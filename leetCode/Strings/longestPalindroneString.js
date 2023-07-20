function longestPalindromeString(s){
    let start = 0
    let last  = 0
    function expandRange(str, begin, end){
        while(begin >= 0 && end < str.length && str[begin] === str[end]){
            begin--
            end++
        }
        if(last<end-start-1){
            last = end-start-1
            start = begin+1
        }
    }
    for(let i=0;i<s.length;i++){
        expandRange(s, i, i)
        expandRange(s, i, i+1)
    }
    return s.slice(start, last+start)
}


console.log(longestPalindromeString('babad'))