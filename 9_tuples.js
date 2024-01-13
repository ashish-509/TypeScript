// The syntax below defines that a an array can contain any values of string, number or boolean type in any order.
// let User : (string | number | boolean) [] = ["John", 30, true];
// User = [30, "John", true];
// User = [true, 30, "John"];
//....................TUPLES.....................
//The data values must follow the order of types as defined in the tuple (string, number and boolean respectively in this case.)
//tuples (this syntax) is very useful in case of API calls where the data is in a particular order.
var tUser = ["John", 30, true];
// tUser = [30, "John", true]; gives error...uncomment and check hovering..
var rgb = [255, 0, 0];
