// const sayHello = function(name) {
//     return 'Hello there , ' + name + ' !'
// }

// console.log(sayHello('Sammy'));

// const sayHello = (name) => {
//     return 'Hello there , ' + name + ' !'
// }

// console.log(sayHello('Sammy'));

const sayHello = (name) => `Hello there, ${name} !`

console.log(sayHello('Sammy'));

const todo = [{
    title: 'Buy Bread',
    isDone: false,
}, {
    title: 'Go to Gym',
    isDone: true,
}, {
    title: 'record Youtube videos',
    isDone: true,
}, ]

const thingsDone = todo.filter((todo) => {
    return todo.isDone === true;
})

console.log(thingsDone);
