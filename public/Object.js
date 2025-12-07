// // object literal

// // Object.create

// // const JsUser = {}; // empty object

// const Users = {
//     firstName : 'Wasim',
//     lastName : 'Akram',
//     age : 27,
//     location: 'Jainagar',
//     email : 'wasimfronted@gmail.com',
//     isLoggedIn: false,
//     lastLoginDay: ['Monday', 'Tuesday'],
//     'fullName' : 'Wasim Akram'
// }

// // console.log(Users.email);
// // console.log(Users['email']);
// // console.log(Users['fullName']);

// Users.greet = function(){
//     console.log(`Hello, ${this.fullName}`);
// }

// console.log(Users.greet());

// console.log(Users.firstName);


// const uberUser = new Object(); // Singleton Object
const uberUser = {}; // Non-Singleton Object

uberUser.id = '123abc';
uberUser.name = 'Wasim';
uberUser.isLoggedIn = false;

console.log(uberUser.name);


const signUp = {
    email: 'some@gmail.com',
    fullname:{
        firstname: 'Wasim',
        lastname: 'Akram'
    }

}

console.log(signUp.email);
console.log(signUp.fullname);
console.log(signUp.fullname.firstname);
console.log(signUp.fullname.lastname);


