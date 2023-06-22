//Question:
//Write a JavaScript function called "calculateArea" that takes two parameters: "length" and "width". 
//The function should calculate and return the area of a rectangle using the given length and width.

//Answer:
// Function to calculate the area of a rectangle
function calculateArea(length, width) {
    var area = length * width;
    return area;
}
  
// Example usage
var length = 10;
var width = 5;
var rectangleArea = calculateArea(length, width);
console.log(rectangleArea);
