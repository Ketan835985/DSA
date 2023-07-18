/* promise objects are represent the eventual completion or failure of an asynchronous process with the resultant value 
There are three state of the promises 
1. resolved/fulfilled - the promise is fulfilled conditionally
2. rejected - the promise is rejected conditionally
3. pending - the promise is pending
*/

function promise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let ren = Math.random();
      if (ren < 0.5) {
        resolve(ren);
      } else {
        reject("rejected", new Error());
      }
    }, 1000);
  });
}

promise()
  .then((val) => console.log(val))
  .catch((err) => console.log(err));
