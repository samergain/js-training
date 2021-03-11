//more info about maps here: https://www.javascripttutorial.net/es6/javascript-map/
var map = new Map();

map.set("cat", "Mr. Hyena");
map.set("lizard", "Mr. Big Big");
map.set("goat", "Wolf Who Ate Wall Street");
map.set("pigeon", "Joan");

console.log(map.keys());
console.log(map.values());
console.log(map.entries());
console.log('the map contains a dog?', map.has('dog'));
console.log('the map contains a cat?', map.has('cat'));
console.log('the name of our pigeon is:',map.get("pigeon"));
map.delete('cat');
console.log('the map contains a cat?', map.has('cat'));
console.log(typeof(map)); // object
console.log(map instanceof Map); // true