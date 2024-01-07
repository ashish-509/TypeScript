// // any

// let hero; // Here, we have not declared the type of hero thus hero is of type any which is not preferred.

// function returnHero(){
//     return "Rajesh Dai";
    // In this case, the function can return any value (string, boolean, number etc.)
// }


// hero = returnHero();
// console.log(hero);       // Check hovering on hero





                //    .........Preferred Way.............

let hero: string;     // Here, we have declared the type of hero as string.

function returnHero(){
    return "Rajesh Dai";
    // In this case, the function can return only string value.
}

hero = returnHero();
console.log(hero);       // Now, check hovering on hero and observe the differences.


// Note: If we want to declare a variable without defining its type, we can use any. But, it is not preferred. Using any you are avoiding the benefits of typescript.