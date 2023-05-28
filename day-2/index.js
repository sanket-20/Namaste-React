// A: Arrow Func
// B: revision of next class

// function x(){
//     const a = 10;
// }
// var xyz = 30;

// x();

// var x = function(){
//     console.log("I'm an anonymous fun")
// }

// in ES6

// const fn = ()=>{

// }

// --------------------------------------------------------

// console.log(this);

// const obj = {
//     fn: function(){
//         console.log(this);
//     },
//     fn2: ()=>{
//         console.log(this);
//     }
// };
// obj.fn();
// obj.fn2();


// function x()
// {
//     console.log(this);
//     function y(){
//         console.log(this);
//         function z(){
//             console.log(this);
//         }
//         z();
//     }
//     y();
// }
// x();


// ---------------------------------------------------

// const person = {
//     name: "Sanket",
//     print: function x(){
//         console.log(this);
//     }
// }

// const person2 = {
//     name: "Sushant"
// }

// function x(){
//     console.log(this)
// }

// x();
// x.call(this);
// x.call(person);
// x.call(person2);

// person.print();
// person.print.call();
// person.print.call(this);
// person.print.call(person2);
// person.print.call(person);


// --------------------------------------------------------------

// const obj = {
//     firstName: "Dewanshu",
//     printName: ()=>{//arrow fun
//         console.log(this.firstName)
//     },
//     printName2: function(){//normal fun
//         console.log(this.firstName)
//     },
// };

// obj.printName();//undefined
// obj.printName2();//Dewanshu


const obj = {
    firstName: "Dewanshu",
    printName: ()=>{
        console.log(this);
    },
    printName2: function(){
        console.log(this);
    },
};

obj.printName();
obj.printName2();

obj.printName.call();
obj.printName2.call();



// --------------------------------------------------

/**
 * 
 * Interviews
 * 
 * Luck
 * most companies don't train their interviwers well
 * 
 * A person can be a good software engineer but a bad interviewer
 * 
 * LUCK -can't control
-------------------------
 Can control

 - our preperation
    - technical skills
        -can everyone knows
    - communication skills
        -speak your thoughts while you code
            - practice to speak even when  you're coding alone
        -If you can't explain, 
            then (interviwer thinks)you don't know
        -you don't work alone in the company
            -companies expect you to have  good 
                communication skills
            Its brutal truth, you should know english
        - mock interviwes
    -Preparation on the interview day 
        -you should be hustling at last moment
        -pen/paper
        -charger
        -water bottle
        -keep your camera turn on
        -keep your phone on silent

    Confidence comes from preparation   


 */
