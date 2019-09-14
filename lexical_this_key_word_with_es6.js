// ES5 object

// var person = {
//     name: 'Harrison',
//     email: 'ermhroy@gmail.com',
//     age: 27,
//     skill: {
//         html : '64%',
//         css  : '60%',
//         javaScript: '55%'
//     },
//     print: function(){
//         setTimeout(function(){
//         console.log('My name is ' + this.name + 'My email is ' + this.email+  ' And my age is ' +this.age ); 
//         }.bind(this), 2000)
//     }
// }
// person.print();


// ES6 object

const person = {
    name: 'Harrison',
    email: 'ermhroy@gmail.com',
    age: 27,
    skill: {
        html : '64%',
        css  : '60%',
        javaScript: '55%'
    },
    print(){
        setTimeout(()=>{
        console.log(`My name is ${this.name}; My email is ${this.email}; And my age is ${this.age} `)  
        }, 2000)
    }
}
person.print();