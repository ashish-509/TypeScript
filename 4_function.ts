function addTwo (num :number){
    // return num + 2;
    return "hello"; //doesn't throw error as return type of function is not specified.
}

addTwo(2);




function convertToUpperCase (str : string): string{
    // observe the syntax for specifying return type of function.
    // return true;  //throws error as the return type of function is string, can't return boolean.
    return str.toUpperCase();
}

convertToUpperCase('my name is ashish.');




function userSignIn (username : string , password : string, rememberMe : boolean, hasPaid : boolean){
    if (username.toUpperCase()=== 'ASHISH' && password === '123456'){
        return 'Welcome, Ashish';
    }
}

userSignIn("Ashish","123456",true,true);




let openDoor = (username:string, doorNumber : number, isKnown:boolean = false) => {
    // observe the syntax for passing default values to functions.
    if (username === 'Ashish' && doorNumber === 1 && isKnown){
        return 'Welcome Ashish';
    }
    else{
        return 'You are not allowed here';
    }
}

openDoor('Ashish',1);





const heros = ["Gates", "Jack", "Musk", "Jobs", "Bezos"];

heros.map((hero : string) : string => {
    return `${hero} is a billionare.`;
}) 



export{}