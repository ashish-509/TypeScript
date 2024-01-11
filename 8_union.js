// when you not sure what type of data is coming (eg: number or string) you can use union type instead of any.
var myVar;
myVar = 10;
myVar = "hello";
var person = {
    name: "John",
    age: 30,
    userName: "john",
    password: "john123"
};
function getID(id) {
    if (typeof id === "number") {
        return id * 10;
    }
    else {
        return id.toUpperCase();
    }
}
var data1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var data2 = ["a", "b", "c", "d", "e"];
var data3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "a", "b", "c", "d", "e"];
