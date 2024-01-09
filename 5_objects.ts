function createCourse({name: string, duration: number}) {
    return `The ${name} course has a duration of 34 hours`;
}

// createCourse({name: "TypeScript", duration: 43, isPaid: true}); //gives error as isPaid does not exist in function definition.

//But the same thing can be done by assigning object to new variable and passing the variable as parameter to the function as done below:

let course1 = {name: "TypeScript", duration: 43, isPaid: true};

createCourse(course1);

export{}