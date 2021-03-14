class A {};
class B extends A {}
class C extends B {}

let b = new B();

console.log(b instanceof B);
console.log((b instanceof B) && (!(b instanceof A)));
console.log((b instanceof B)&&(!(b instanceof C)));
