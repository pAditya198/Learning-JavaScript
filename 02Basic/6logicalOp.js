// && AND operator - needs both sides to be true
// || OR operator - needs either sides to be true

var isLoggedin = true
var isVerified = true
var hasPaymentToken = true
var isGuest = true

if (isVerified && isLoggedin && hasPaymentToken) {
    console.log("Greeting Message to the user")
    console.log("Grant access to all courses")
} else if (isVerified || isGuest) {
    console.log('Allow access to preview all free courses')
} else
    console.log("MESSAGE: Please contact Admin")
