let marks = [50, 90, 80, 85, 100]

let total = function() {
    var sum = 0
    for (let i = 0; i < marks.length; i++) {
        sum = sum + marks[i]
    }
    return sum
}

console.log(`Percentage is ${total()/5}`)

// add grading with if else
