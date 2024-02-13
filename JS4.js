// Create array of ages
let ages = [3, 9, 23, 64, 2, 8, 28, 93];

// Subtract first element from last element
let difference = ages[ages.length - 1] - ages[0];
console.log("Difference between last and first age:", difference);

// Add a new age
ages.push(30);

// Recalculate difference using dynamic referencing
difference = ages[ages.length - 1] - ages[0];
console.log("Difference between last and first age after adding new age:", difference);

// Calculate average age using loop
let sum = 0;
for (let i = 0; i < ages.length; i++) {
    sum += ages[i];
}
let averageAge = sum / ages.length;
console.log("Average age:", averageAge);

// Create array of names
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

// Calculate average number of letters per name
let totalLetters = 0;
for (let i = 0; i < names.length; i++) {
    totalLetters += names[i].length;
}
let averageLettersPerName = totalLetters / names.length;
console.log("Average number of letters per name:", averageLettersPerName);

// Concatenate all names together
let allNames = '';
for (let i = 0; i < names.length; i++) {
    allNames += names[i] + ' ';
}
console.log("All names together:", allNames);

// Accessing the last element of any array
let lastElement = ages[ages.length - 1];

// Accessing the first element of any array
let firstElement = ages[0];

// Create array to store lengths of names
let nameLengths = [];
for (let i = 0; i < names.length; i++) {
    nameLengths.push(names[i].length);
}

// Calculate sum of elements in nameLengths array
let sumOfLengths = 0;
for (let i = 0; i < nameLengths.length; i++) {
    sumOfLengths += nameLengths[i];
}
console.log("Sum of name lengths:", sumOfLengths);

// Function to concatenate word n times
function repeatWord(word, n) {
    return word.repeat(n);
}

console.log(repeatWord('Hello', 3)); // Output: HelloHelloHello

// Function to return full name
function fullName(firstName, lastName) {
    return firstName + ' ' + lastName;
}

console.log(fullName('John', 'Doe')); // Output: John Doe

// Function to check if sum of array is greater than 100
function isSumGreaterThan100(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum > 100;
}

console.log(isSumGreaterThan100([20, 30, 60])); // Output: true

// Function to calculate average of array
function calculateAverage(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum / numbers.length;
}

console.log(calculateAverage([10, 20, 30])); // Output: 20

// Function to compare averages of two arrays
function compareAverages(arr1, arr2) {
    return calculateAverage(arr1) > calculateAverage(arr2);
}

console.log(compareAverages([10, 20, 30], [5, 15, 25])); // Output: true

// Function to check if it's hot outside and if there's enough money to buy a drink
function willBuyDrink(isHotOutside, moneyInPocket) {
    return isHotOutside && moneyInPocket > 10.50;
}

console.log(willBuyDrink(true, 15)); // Output: true
