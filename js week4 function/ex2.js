let originalArray = [1, 2, 3, 4, 5];

function updateArray(array, index, newValue) {
  let newArray = [...array];
  newArray[index] = newValue;
  return newArray;
}

let updatedArray = updateArray(originalArray, 2, 10);

console.log("Original array:", originalArray);
console.log("Updated array:", updatedArray);