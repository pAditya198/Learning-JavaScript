// const days = ['Mon', 'Tues', 'Wed', 'Thus', 'Fri', 'Sat']

// console.log(days[0])

// days.forEach(function(day, index) {
//     console.log(`starts with ${index+1} -- ${day}`)
// })

// for (let i = 0; i < days.length; i++) {
//     console.log(days[i]);
// }


// const myToDo = []

// myToDo.push('Buy Bread')
// myToDo.push('Record video for Youtube')
// myToDo.push('Go to Gym')

// myToDo.forEach(function(todo, index) {
//     console.log(`Your task no. ${index+1} is : ${todo}`);

// })



const myToDo = []

myToDo.unshift('Buy Bread')
myToDo.unshift('Record video for Youtube')
myToDo.unshift('Go to Gym')
for (let index = 0; index < myToDo.length; index++)
    console.log(`Your task no. ${index+1} is : ${myToDo[index]}`);
