//pop//
var plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];
console.log(plants.pop());
console.log(plants);

//filter//
var names = ['laptop', 'mobile', 'bike', 'intellectual', 'manikandan', 'ranjithkumar'];

var result = names.filter(words=>words.length>6);

console.log(result);

//map//
var a = [1,4,9,16,25,36]
var b=a.map((Math.sqrt))
console.log(b)


//shift//
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.shift();
console.log(fruits);

//sort method//
const fruit= ["Banana", "Orange", "Apple", "Mango"];
fruit.sort();
console.log(fruit);
