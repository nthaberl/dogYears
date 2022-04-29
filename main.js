//Step 1
let myAge = 31;
//this is my current age

//Step 2
let earlyYears = 2;
//initialized with let as this will change

//Step 3
earlyYears *= 10.5;

//Step 4
let laterYears = myAge - 2;
//laterYears is my current age minus 2

//Step 5
laterYears *= 4;
//This will find age in dog years

//Step 6
console.log(earlyYears);
console.log(laterYears);

//Step 7
let myAgeInDogYears = earlyYears + laterYears;
//myAgeInDogYears combines earlyYears and laterYears to find... my current in age in dog years

//Step 8
let myName = "Natascha".toLowerCase();
//taking my name, a string, and making sure it is all lowercase

//Step 9
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)
//using string interpolation to display variables in an easy to understand sentence
