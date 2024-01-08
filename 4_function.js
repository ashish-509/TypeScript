"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    // return num + 2;
    return "hello"; //doesn't throw error as return type of function is not specified.
}
addTwo(2);
function convertToUpperCase(str) {
    // observe the syntax for specifying return type of function.
    // return true;  //throws error as the return type of function is string, can't return boolean.
    return str.toUpperCase();
}
convertToUpperCase('my name is ashish.');
function userSignIn(username, password, rememberMe, hasPaid) {
    if (username.toUpperCase() === 'ASHISH' && password === '123456') {
        return 'Welcome, Ashish';
    }
}
userSignIn("Ashish", "123456", true, true);
var openDoor = function (username, doorNumber, isKnown) {
    if (isKnown === void 0) { isKnown = false; }
    // observe the syntax for passing default values to functions.
    if (username === 'Ashish' && doorNumber === 1 && isKnown) {
        return 'Welcome Ashish';
    }
    else {
        return 'You are not allowed here';
    }
};
openDoor('Ashish', 1);
var heros = ["Gates", "Jack", "Musk", "Jobs", "Bezos"];
heros.map(function (hero) {
    return "".concat(hero, " is a billionare.");
});
