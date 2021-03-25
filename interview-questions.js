//Q1: which console.log output is "true" and which is "false"
class A {};
class B extends A {}
class C extends B {}

let b = new B();

console.log(b instanceof B);
console.log((b instanceof B)&&(!(b instanceof A)));
console.log((b instanceof B)&&(!(b instanceof C)));


//Q2: which testing is used for a programm's individual component functionality testing
// 1- Functionality testing
// 2- Unit testing
// 3- Security testing
// 4- Smoke testing
// 5- Regression testing
//A2: Unit testing - Individual components functionality teting is done through Unit testing. Unit testing is used to test a software's units or components

//Q3: What is method overloading?
/* 
Method overloading is having 2 methods/functions with the same name but different number of parameters/arguments, or same number of args but different types for those args.
Overloading is not supported natively in javascript. if used, the last function defined will be used. The other functions with the same name will be ignored with no error message.
*/

//Q4: What is the meaning of microservices? and what is it for?
//A4: 
/* 
Microservices are a form of service-oriented architecture style, wherein applications are built as a collection of different smaller services rather than one whole app. Instead of a monolithic app, you have several independent applications that can run on their own and may be created using different coding or programming languages. These smaller programs are grouped together to deliver all the functionalities of the big, monolithic app.
Benefits: faster, lower costs, and fewer bugs.
*/