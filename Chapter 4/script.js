//Functions
//They define a block of code which we can call and execute whenever we want

//a) Function Declaration

// function greet () {
//     console.log('Hello My friend');
// }

// //function expression

// const speak = function(){
//     console.log('good day');

// };
// speak();

//arguments and paramaters

// const speak = function (name) {
//     console.log(`good day ${name}`);
// }

// speak('James');

//For loops

// for([initialization]); [condition]; [final-expression]) {

// }

//for Loops mosh 
//for loop of odd 
//functions

//function declaration
// function greet(){
//     console.log('Hello there');
// }

// //function expression
// const speak = function(){
//     console.log('Good day');

// };
// //function  expressions are the only time we use semi colons at the end of the call blocks

// //greet(); //function calling 
// speak();

// //fun


//arguments & parameters

// const speak = function(name, time){ //name is a parameter
//     console.log(`Good ${time} ${name}`);
// };
// speak('James', 'morning'); //james is a variable


//returning values

// const speak = function(name = 'luigi', time = 'night'){
//     console.log(`good ${time} ${name}`);
// };
//regular function
// const calcArea = function(radius){
//     return 3.14 * radius**2;
//     //return area;
// }

// //arrow functions
// const calcArea = (radius) => {
//     return 3.14 * radius**2;
// }

// const area = calcArea(7);
// console.log(area);

//practise arrow functions
// const calcArea = radius => 3.14 * radius**2;

// const area = calcArea(7);
// console.log(area);

//const green = () => 'Hello world';

// const bill = function(products, tax){
//     let total = 0;
//     for(let i = 0; i < products.length; i++){
//         total += products[i] + products[i] * tax;        
//     }
//     return total;
// }


//arrow function

// const bill = (products, tax) => {
//     let total = 0;
//     for(let i = 0; i < products.length; i++){
//         total += products[i] + products[i] * tax;        
//     }
//     return total;
// }

// const q = bill([10, 15, 30], 0.2)
// console.log(q);

//functions 

// const name = 'shaun';

// //functions 

//callbacks and foreach
// const myFunc = (callbackFunc) => {
//     //do something
//     let value = 50;
//     callbackFunc(value);
// };

// myFunc(function(value) {
//     console.log(value);
// })

// let people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

// const createPerson = 

///regular function
// const calcArea = radius =>  3.14 * radius**2;
// const a = calcArea(5);
// console.log('The area is, ', a);

// const greet = () => 'hello, world';

// const hey = greet();
// console.log(hey);

//callbacks adn foreach

// const myFunc = (callbackFunc) => {
//     let value = 50;
//     callbackFunc(value);
// }

// myFunc(value =>{
//     console.log(value);
// });

//callback & foreach

// let people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

// const logPerson = (person, index) => {
//     console.log(`${index} - hello ${person}`);
// };
// people.forEach(logPerson);

//callback in action 

const ul = document.querySelector('.people');

const people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

let html = ``;
people.forEach(function(person){
    //create Html template
    html += `<li style = "color: purple">${person}</li>`;

});
console.log(html);
ul.innerHTML = html;