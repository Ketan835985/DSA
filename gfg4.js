/* Given a stack, delete the middle element of the stack without using any additional data structure.
Middle element:- ceil((size_of_stack+1)/2) (1-based indexing) from bottom of the stack.

Note: The output shown by the compiler is the stack from top to bottom.
 
Example 1:

Input: 
Stack = {10, 20, 30, 40, 50}
Output:
ModifiedStack = {10, 20, 40, 50}
Explanation:
If you print the stack the bottom-most element will be 10 and the top-most element will be 50. Middle element will be element at index 3 from bottom, which is 30. Deleting 30, stack will look like {10 20 40 50}.*/


   function deleteMid(s, sizeOfStack)
    {
        // code here
        let arr = []
        let target = Math.ceil((sizeOfStack)/2)
        
        
        for(let i=0; i<sizeOfStack; i++){
            let c = s.pop()
            arr.push(c)
        }
        arr.reverse()
        for(let i=0; i<arr.length; i++){
            if (i !== target) {
               let p = arr[i];
                s.push(p);
            }
        }
        return s
    }


// console.log(deleteMid([10, 20, 40, 50], 4));


const obj = {
    name: "eej",
    age: 20,
    address: {
        city: "Mumbai",
        state: "Maharashtra"
    },
    greet : function(){
        setTimeout(()=>{
            console.log(`Hello ${this.name}`);
        }, 0);
    }
}
obj.greet()