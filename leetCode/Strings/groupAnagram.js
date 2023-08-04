/*Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
Example 2:

Input: strs = [""]
Output: [[""]]
Example 3:

Input: strs = ["a"]
Output: [["a"]]
 

Constraints:

1 <= strs.length <= 104
0 <= strs[i].length <= 100
strs[i] consists of lowercase English letters. */


function groupAnagram(strs){
    let groupsObj={}
    for(var i=0; i<strs.length; i++){
        let str = strs[i];
        let sortS = str.split('').sort().join('');

        if(groupsObj[sortS]){
            groupsObj[sortS].push(str);
        }
        else{
            groupsObj[sortS] = [str]
        }
    }
    return Object.values(groupsObj)
}


console.table(groupAnagram(["eat", "tea", "tan", "ate", "nat", "bat"])) //[ [ 'eat', 'tea', 'ate' ], [ 'tan', 'nat' ], [ 'bat' ] ]
