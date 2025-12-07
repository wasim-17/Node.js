// singleton object

// object literal

// Object.create

const JsUser = {}; // empty object

const Users = {
    firstName : 'Wasim',
    lastName : 'Akram',
    age : 27,
    location: 'Jainagar',
    email : 'wasimfronted@gmail.com',
    isLoggedIn: false,
    lastLoginDay: ['Monday', 'Tuesday'],
    'fullName' : 'Wasim Akram'
}

console.log(Users.email);
console.log(Users['email']);
console.log(Users['fullName']);