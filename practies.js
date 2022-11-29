function add(num1, num2 ){
    return num1+num2;
}

function mult(num1, num2){
    return num1*num2;
}

function sub(num1, num2){
    return num1-num2;
}

function div(num1, num2){
    return num1/num2;
}

function calculator(num1, operator, num2){
    return operator(num1, num2); 
}

var ans = calculator(1, div, 8);
console.log(ans);

var bellBoy1 = {
    name : "Dada",
    age : 18,
    languages : ["Marathi, Hindi"],
    permant : "yes",
}
console.log(bellBoy1.languages);
//in my factory 1000 of bellboy how we can manage their information


// This is the constructor function in js
function BellBoy1(name , age, languages, permant){
    this.name = name;
    this.age = age;
    this.languages = languages;
    this,permant = permant;
}

var bellBoy2 = new BellBoy1("Adarsh", 22, ["Feanch", "English"], "yes");

console.log(bellBoy2.languages);