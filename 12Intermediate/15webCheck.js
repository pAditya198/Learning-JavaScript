let userEmail = 'p.aditya.198@gmail.com'
let password = 'sammy198@'
let userChecker = function(mystring) {
    if ((mystring.includes("@gmail.com")) && mystring.length > 10) {
        return true
    } else
        return false
}
let passChecker = function(mystring) {
    if ((mystring.includes(1234)) && mystring.length < 8) {
        return false
    } else
        return true
}
console.log(userChecker(userEmail));
console.log(passChecker(password));
