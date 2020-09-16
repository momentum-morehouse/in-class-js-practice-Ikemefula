// Problem 1
// declare a variable called fruit
// ANSWER: let fruit
// assign your variable the value "banana"
// ANSWER: let fruit = "banana" 
// console log your variable
// ANSWER: 
//let fruit = "banana"
//console.log (fruit)

// reassign your variable the value "peach"
// Fruit is the name of your variable. The string ￼Banana is its value￼￼
// in order to see our results we need to tell it to log onto￼
// console log your variable
let fruit = "banana";
console.log(fruit);
fruit = "peach";
console.log(fruit);








// Problem 2
// write a function called product that accepts two numbers and logs the product in the console and then
// returns the answer when you multiply them both together
// call that function on the numbers 4 & 689 to test it
function product(num1, num2){
    return num1 * num2
}
console.log(product(4,689));
 


// Problem 3
// write a function called evens that takes an array of numbers, 
//removes all the numbers that are odd and returns a new array with only the even numbers

// remember that even numbers have a remainder of 0 when you divide them by 2

// call your function on this array of numbers [4, 37, 18, 29, 52, 103, 22]

function evens(arrayOfNumbers){
    let 
}

console.log(evens([4, 37, 18, 29, 52, 103, 22]));


//Problem 4
// write a function called five that takes a word and prints it in the console
// five times
// call your function on the word "pineapple" to test it
function five(){

    console.log(five)
}


//Problem 5
// write a function called shortWords that takes an array of words and then

// returns a new array with only the words that are 3 letters long or less

// call your function on this array ["basin", "pit", "cheese", "bun", "river"]

function shortWords(arrayWords){
    let newArray = [];
    for (let i = 0; i< arrayWords.length; i++){
        if (arrayWords[i].length <= 3){
            newArray.push(arrayWords[i])
        }
    }
    return newArray;

}
console.log(shortWords(["basin", "pit", "cheese", "bun", "river"]))