"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createCourse(_a) {
    var string = _a.name, number = _a.duration;
    return "The ".concat(name, " course has a duration of 34 hours");
}
// createCourse({name: "TypeScript", duration: 43, isPaid: true}); //gives error as isPaid does not exist in function definition.
//But the same thing can be done by assigning object to new variable and passing the variable as parameter to the function as done below:
var course1 = { name: "TypeScript", duration: 43, isPaid: true };
createCourse(course1);
