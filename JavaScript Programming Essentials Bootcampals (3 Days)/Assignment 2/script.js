//Question:
//Write a JavaScript function called find Max that takes an array of numbers as an argument and returns the maximum number in the array.

//Answer:
function findMax(numbers) {
    if (numbers.length === 0) {
      return undefined; // Return undefined for an empty array
    }
  
    let max = numbers[0]; // Assume the first number is the maximum
  
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] > max) {
        max = numbers[i]; // Update max if a larger number is found
      }
    }
  
    return max;
}
const numbers = [5, 10, 3, 8, 1];
const maxNumber = findMax(numbers);
console.log(maxNumber); // Output: 10
    
