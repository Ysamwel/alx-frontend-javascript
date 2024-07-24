export default function appendToEachArrayValue(array, appendString) {
  for (const value of array) {
    const index = array.indexOf(value); // Get the current index of the value
    array[index] = appendString + value;
  }

  return array;
}
