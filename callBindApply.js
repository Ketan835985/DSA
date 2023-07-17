// Call() = the call method invoked a function with this value , and  an argument provided one by one

let employee1 = {
    name: "John",
    salary: 10000
};
let employee2 = {
    name: "Peter",
    salary: 20000
}
function invites(greeting1, greeting2) {
    console.log(greeting1 + " " + this.name + " " + greeting2 + " " + this.salary);
}
// invites.call(employee1, "Hello", "How are you")
// invites.call(employee2, "Hello", "How are you")



// apply () = the apply method invoked a function with this value , and  an argument provided in array


// invites.apply(employee1, ["Hello", "How are you"])
// invites.apply(employee2, ["Hello", "How are you"])


// bind - bind method is always return a new function, and allow to pass any number of arguments

var invites2 = invites.bind(employee1)
var invites3 = invites.bind(employee2)

invites2("Hello", "How are you")
invites3("Hello", "How are you")