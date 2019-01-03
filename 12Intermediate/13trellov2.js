let days = ['Monday', 'Tueday', 'Wednesday', 'Thusday', 'Friday', 'Saturday']
let i = 0

let myTodos = {

    day: days[i],
    meetings: 0,
    meetDone: 0,
}

let addMeeting = function(todo, meet = 0) {
    todo.meetings = todo.meetings + meet
}

let meetingsDone = function(todo, meet = 0) {
    todo.meetDone = todo.meetDone + meet
}

let reset = function(todo) {
    todo.meetDone = 0
    todo.meetings = 0
}

let getSummary = function(todo) {
    let remainMeetings = todo.meetings - todo.meetDone
    return `You have ${remainMeetings} no. of Meetings left ${myTodos.day}`
}

let dayChanger = function(todo) {
    i = i + 1
    todo.day = days[i]
}

addMeeting(myTodos, 4)
meetingsDone(myTodos, 2)
console.log(myTodos)
console.log(getSummary(myTodos));
reset(myTodos)
dayChanger(myTodos)
addMeeting(myTodos, 3)
console.log(myTodos)
console.log(getSummary(myTodos));
