//Q1: which console.log output is "true" and which is "false"
class A {};
class B extends A {}
class C extends B {}

let b = new B();

console.log(b instanceof B);
console.log((b instanceof B) && (!(b instanceof A)));
console.log((b instanceof B)&&(!(b instanceof C)));


//Q2: which testing is used for a programm's individual component functionality testing
// 1- Functionality testing
// 2- Unit testing
// 3- Security testing
// 4- Smoke testing
// 5- Regression testing

