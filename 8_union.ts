// when you not sure what type of data is coming (eg: number or string) you can use union type instead of any.

let myVar: number | string;

myVar = 10;
myVar = "hello";
// myVar = true; // error : Type 'boolean' is not assignable to type 'string | number'.





type User = {
    name : String,
    age : Number
}

type Admin = {
    userName : String,
    password : String
}

let person : User | Admin = {
    name : "John",
    age : 30,
    userName : "john",
    password : "john123"
}






function getID(id : number | string) {
    if (typeof id === "number") {
        return id * 10;
    }
    else {
        return id.toUpperCase();
    }
}





const data1 : Number [] = [1,2,3,4,5,6,7,8,9,10];
const data2 : String [] = ["a","b","c","d","e"];

const data3 : (number | string) [] = [1,2,3,4,5,6,7,8,9,10,"a","b","c","d","e"];