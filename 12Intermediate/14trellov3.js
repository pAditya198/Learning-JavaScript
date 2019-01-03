let myTodos = {

    day: 'Monday',
    meetings: 0,
    meetDone: 0,
    // methods are exactly like function when 
    // written inside an object functions are said 
    // to be methods

    addMeetings: function(num = 0) {
        // console.log(this);
        // /*this is a keyword which refers to the items
        // inside the object*/
        this.meetings = this.meetings + num

    },
    reset: function() {
        this.meetDone = 0
        this.meetings = 0
    },

    meetingsDone: function(meet = 0) {
        this.meetDone = this.meetDone + meet
    },

    summary: function() {
        return `You have ${this.meetings-this.meetDone} no. of meetings Today`
    }
}

myTodos.addMeetings(4)
myTodos.meetingsDone(2)
console.log(myTodos.summary())
