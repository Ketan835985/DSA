/* Your task is to implement  2 stacks in one array efficiently. You need to implement 4 methods.
push1 : pushes element into first stack.
push2 : pushes element into second stack.
pop1 : pops element from first stack and returns the popped element. If first stack is empty, it should return -1.
pop2 : pops element from second stack and returns the popped element. If second stack is empty, it should return -1.

Example 1:

Input:
push1(2)
push1(3)
push2(4)
pop1()
pop2()
pop2()
Output:
3 4 -1
Explanation:
push1(2) the stack1 will be {2}
push1(3) the stack1 will be {2,3}
push2(4) the stack2 will be {4}
pop1()   the popped element will be 3 from stack1 and stack1 will be {2}
pop2()   the popped element will be 4 from stack2 and now stack2 is empty
pop2()   the stack2 is now empty hence returned -1.
Example 2:

Input:
push1(1)
push2(2)
pop1()
push1(3)
pop1()
pop1()
Output:
3 1 -1
Explanation:
push1(1) the stack1 will be {1}
push2(2) the stack2 will be {2}
pop1()   the popped element will be 1 from stack1 and stack1 will be empty
push1(3) the stack1 will be {3}
pop1()   the popped element will be 3 from stack1 and stack1 will be empty
pop1()   the stack1 is now empty hence returned -1.
Your Task:
You don't need to read input or print anything. You are required to complete the 4 methods push1, push2 which takes one argument an integer 'x' to be pushed into stack one and two and pop1, pop2 which returns the integer poped out from stack one and two. If no integer is present in the stack return -1.

Expected Time Complexity: O(1) for all the four methods.
Expected Auxiliary Space: O(1) for all the four methods.

Constraints:
1 <= Number of queries <= 104
1 <= Number of elements in the stack <= 100
The sum of elements in both the stacks < size of the given array*/



function TwoStack (){
    let stack1 = [];
    let stack2 = [];
    function push1(x){
        stack1.push(x)
      }
    
     function  push2(x){
        stack2.push(x)
      }
    
     function pop1(){
        return (stack1.pop()? stack1.pop() : -1)
      }
    
     function pop2(){
        return (stack2.pop() ? stack2.pop() : -1)
      }
}


function twoStacksDriver() {
    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('Enter the number of test cases: ', (T) => {
        let remainingTestCases = T;

        function processTestCase() {
            rl.question('Enter the number of queries: ', (Q) => {
                let stack1 = [];
                let stack2 = [];

                function processQuery() {
                    if (Q === 0) {
                        remainingTestCases--;
                        if (remainingTestCases === 0) {
                            rl.close();
                        } else {
                            processTestCase();
                        }
                        return;
                    }

                    rl.question('Enter stack number and query type (1 for push, 2 for pop): ', (query) => {
                        const [stackNo, queryType] = query.split(' ');

                        if (queryType === '1') {
                            rl.question('Enter the element to push: ', (element) => {
                                if (stackNo === '1') {
                                    stack1.push(parseInt(element));
                                } else if (stackNo === '2') {
                                    stack2.push(parseInt(element));
                                }
                                Q--;
                                processQuery();
                            });
                        } else if (queryType === '2') {
                            let poppedElement;
                            if (stackNo === '1') {
                                if (stack1.length > 0) {
                                    poppedElement = stack1.pop();
                                } else {
                                    poppedElement = -1;
                                }
                            } else if (stackNo === '2') {
                                if (stack2.length > 0) {
                                    poppedElement = stack2.pop();
                                } else {
                                    poppedElement = -1;
                                }
                            }
                            console.log(poppedElement + ' ');
                            Q--;
                            processQuery();
                        }
                    });
                }

                processQuery();
            });
        }

        processTestCase();
    });
}

twoStacksDriver();
