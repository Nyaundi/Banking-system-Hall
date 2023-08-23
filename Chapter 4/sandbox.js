//functsion declaration
function greet(){
    console.log('hello there');
}

// //function expression
// //const speak = function(){
//     console.log('good day');
// }

// // speak();
// greet();

//arguments and parameters
// const speak = function(name = 'luigi', time = 'night'){
//     console.log(`good ${time} ${name}`);
// };

// speak();
// speak('shaun');

// //name is a parameter
// //mario is an argument

const calcArea = function(radius){
    let area = 3.14 * radius**2;
    return area;
}

const area = calcArea(5);
console.log(area);
