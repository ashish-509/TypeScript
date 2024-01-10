type User = {
    readonly id: number; // readonly (nobody will be able to manipulate it.)
    name: string;
    email: string;
    isActive: boolean;
    cardNumber?: number; // observe the syntax for OPTIONAL PROPERTY.
}

let myUser: User = {
    id: 1,
    name: "John",
    email: "ak46@gmail.com",
    isActive: true
}

myUser.email = "ak46@outlook.com";
// myUser.id = 2; // Error: Cannot assign to 'id' because it is a read-only property.
