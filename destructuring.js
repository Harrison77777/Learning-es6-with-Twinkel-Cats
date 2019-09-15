// for destructuring a object has to use curly bracket 
const Person = {
    name : 'harrison',
    email : ' ermhroy@gmail.com',
    studying_at: ' B.S.S'
}

let {name, email, studying_at} = Person

// console.log(name, email, studying_at);

// let print = (name,email) => {
//     return `Name is ${name} E-mail is ${email}`
// }
// console.log(print(name,email))

let print = ({email,name}) => {
    return `Name is ${name} E-mail is ${email}`
}
console.log(print({name,email}))


// const myArray = [1, 2, 3.4, 4, 5, 6]

// // for destructuring a array first of all take a let var use character into a square bracket honor by per array's value
// let [a, b, c, d, e, f,] = myArray
// console.log(a, f, c);
