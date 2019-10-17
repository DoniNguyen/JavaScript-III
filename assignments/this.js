/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding - the "this" keyword's default behavior; It binds to the window object
* 2. Implicit Binding - the "this" keyword refers to whatever is left of the dot.
* 3. New Binding - in tandem use with the "new" keyword, this refers to the object created by "new".
* 4. Explicit Binding - three keywords. "call", "apply", and "bind".
".call" passes arguments in one by one. "apply" pass the arguments in as an array. 
".bind" same as ".call" except it does not immediately invoke the function. 
it creates a new function to be invoked later.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
let sayAge = function(){
    console.log(this.age)
}
window.age = 20;
sayAge();
// Principle 2

// code example for Implicit Binding
let person = function(name,age){
    return{
        name: name,
        age: age,
        sayName: function sayName(){
            console.log(this.name);
        }
    };
};
let Doni = person('Doni','20')
Doni.sayName();
// Principle 3

// code example for New Binding
let Animal = function(species, color, type){
    this.color = color;
    this.species = species;
    this.type = type;
}
let zebra = new Animal("Zebra","black+white","Mammal")
console.log(zebra);
// Principle 4

// code example for Explicit Binding
let sayName = function(lang1,lang2){
    console.log(`My name is ${this.name} and i can speak ${lang1} and ${lang2}`);
}

let Carmeli = {
    name: 'Carmeli',
    age: '19'
}

let languages = ["English","Vietnamese"]
let carbind = sayName.bind(Carmeli, languages[0], languages[1]);
sayName.call(Carmeli, languages[0], languages[1]);
sayName.apply(Carmeli, languages);

carbind();
