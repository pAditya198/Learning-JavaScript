// let sayHello = function() {
//     console.log('Greetings to the user');
//     console.log('Hey There');
// }

// sayHello()

let sayHello = function(name) {
    console.log(`Greetings to the ${name}`);
    console.log(`Hey ${name}`);
}

// sayHello("John")

let fullNameMaker = function(fName, lName) {
    console.log('Welcome to LCO')
    console.log(`Happy to have you, ${fName} ${lName}`);

}

// fullNameMaker('John', 'Doe')


let numAdder = function(num1, num2) {
    let adder = num1 + num2
    return adder
}

// console.log(numAdder(3, 8));

let multiplier = function(num1, num2) {
    return num1 * num2
}

// console.log(multiplier(2, 4))

let guestUser = function(name = 'unName', courseCount = 0) {
    return 'Welcome ' + name + ' your course count is : ' + courseCount
}

console.log(guestUser());
