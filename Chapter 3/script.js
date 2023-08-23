// const names = ['shaun', 'mario', 'luigi'];

// for(let i = 0, i < names.length; i++){
//     console.log(i);
// }

//For loops I did not understand something 
// cycling through an array >> iteration

// //while loop
// const names = ['shaun', 'mario', 'luigi']
// let i = 0;

// // while(i < 5){
// //     console.log('in loop: ', i);
// //     i++;
// // }

// while(i < names.length){
//     console.log(names[i]);
//     i++;
// }

//do while loops
// let i = 5;

// do{
//     console.log('val of i is: ', i);
//     i++;
// } while(i<5);

//conditional statmenbts 
//a) if statements
// const age = 25;

// if(age > 20){
//     console.log('You are over 20 years old');
// }

// const ninjas = ['shaun', 'ryu', 'chun-li', 'yoshi'];

// if(ninjas.length > 3){
//     console.log("That's alot of Ninjas");
// }

// const password = 'p@sswordysusi';

// if(password.length >= 8){
//     console.log('that password is mighty strong');
// }else if(password.length >= 8){
//     console.log('That password is long enough!');
// } else {
//     console.log('Password is not long enough!');
// }

// //logical operators - OR || and AND &&

// //Logical NOT (!)

// let user = false;

// if(!user){
//     console.log('You must be logged in to continue');
// }

// //break and continue

// const scores = [50, 25, 0, 30, 100, 20, 10];

// for(let i = 0, l < scores.length; l++){
//     console.log('your score: ', score[l]);
// }

// //switch statemnets 
// const grade = '1';

// switch(grade){
//     case 'A':
//         console.log('You got an A!');
//         break;
//     case 'B':
//         console.log('You got an B!');
//         break;
//     case 'C':
//         console.log('You got an C!');
//         break;
//     case 'D':
//         console.log('You got an D!');
//         break;
//     case 'E':
//         console.log('You got an E!');
//         break;
//     default:
//         console.log('not a valid grade');
// }

// //using if statemnets 

//VARIABLE & BLOCK SCOPE
let age = 30;

if(true){
    age = 40;
    console.log('Inside code block: ', age);

}

console.log('Outside code block: ', age);