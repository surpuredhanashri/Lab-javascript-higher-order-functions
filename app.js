// Function #1: Array Slice

var foods = ["pizza", "burger", "fingerchips", "donuts", "springroll"];
let newfoods = foods.slice(1, 4);
console.log(newfoods);

//Function 2
foods = ["pizza", "burger", "fingerShips", "donuts", "springRoll"];

const numberArray = [12, 324, 213, 4, 2, 3, 45, 4234];

let evennum = numberArray.filter(ele => ele%2==0) 
console.log(evennum);

//Function 4

function isPrime(numberArray) {
    prime = numberArray.filter((number) => {
        for (var i = 2; i <= Math.sqrt(number); i++)
         {
            if (number % i === 0) 
            return false;
        }
        return true;
    });

    console.log(prime);
}


isPrime(numberArray);


//Function 5

const myArray = [11, 34, 20, 5, 53, 16];
var newarray = myArray.map(findSquareOfNumbers);
function findSquareOfNumbers(myArray) {
     console.log(myArray *2);
}

//Function 7

// myArray = [2, 3, 5, 10];

function multiply(myArray){
    return myArray.reduce(function(initial,current){
        return initial * current;
    });
}
console.log(multiply(myArray));