// const myToDo = ['Buy Bread', 'Go to Gym', 'record Youtube videos']

// console.log(myToDo[myToDo.indexOf('Buy Bread')]);

// myToDo.indexOf('Buy Bread') what this thing do is simply 
// finds the index of the particular element from th array

const newToDo = [{
    title: 'Buy Bread',
    isDone: false,
}, {
    title: 'Go to Gym',
    isDone: false,
}, {
    title: 'record Youtube videos',
    isDone: true,
}, ]

// const index = newToDO.findIndex(function(todo, index) {
//     return todo.title === 'Go to Gym'
// })

// console.log(index);


// Method 1

// const findtodo = function(myTodo, title) {
//     const index = myTodo.findIndex(function(todo, index) {
//         return todo.title.toLowerCase() === title.toLowerCase()
//     })

//     return index
// }

// let printME = findtodo(newToDo, 'buy bread')
// console.log(newToDo[printME]);

// Method 2
const findtodo = function(myTodo, title) {
    const titleReturned = myTodo.find(function(todo, index) {
        return todo.title.toLowerCase() === title.toLowerCase()
    })

    return titleReturned
}

let printME = findtodo(newToDo, 'buy bread')
console.log(printME);
