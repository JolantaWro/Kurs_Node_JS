self["webpackHotUpdatees6_async_await"](0,{

/***/ 23:
/***/ (() => {

/**
 * Przerób poniższe metody na funkcje strzałkowe
 */
// function isArrayIncludeValue(value, array) {
//   return array.includes(value);
// }

function isArrayIncludeValue(value, array) {
  return array.includes(value);
}
function sum(num1, num2) {
  return num1 + num2;
}

// const printArray = function (array) {
//   array.forEach(function (element) {
//     console.log(element);
//   });
// };

var printArray = function printArray(array) {
  array.forEach(function (element) {
    console.log(element);
  });
};
var filterNumbersFromArray = function filterNumbersFromArray(array) {
  return array.filter(function (el) {
    return typeof el === "number";
  });
};

/**
 * Wywołania
 * Nie zmieniaj kodu poniżej!
 */
console.log("--- isArrayIncludeValue ---");
var result1 = isArrayIncludeValue(2, [1, 2, 3, 5, 3, 2, 5]);
console.log(result1);
console.log("\n--- sum ---");
var result2 = sum(2, 3);
console.log(result2);
console.log("\n--- printArray ---");
printArray(["Ala", "Zosia", "Ewa", "Piotr", "Darek"]);
console.log("\n--- filterNumbersFromArray ---");
var filteredArray = filterNumbersFromArray(["Ala", 5, "Ewa", "Piotr", 2, "Adam", 19]);
console.log(filteredArray);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("2575c4d079e4feb4818e")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5mOWE3NDMyY2U2ZDU1OWI5ZDE2Ny5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLG1CQUFtQkEsQ0FBQ0MsS0FBSyxFQUFFQyxLQUFLLEVBQUU7RUFDekMsT0FBT0EsS0FBSyxDQUFDQyxRQUFRLENBQUNGLEtBQUssQ0FBQztBQUM5QjtBQUVBLFNBQVNHLEdBQUdBLENBQUNDLElBQUksRUFBRUMsSUFBSSxFQUFFO0VBQ3ZCLE9BQU9ELElBQUksR0FBR0MsSUFBSTtBQUNwQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFVQSxDQUFHTCxLQUFLLEVBQUk7RUFDMUJBLEtBQUssQ0FBQ00sT0FBTyxDQUFDLFVBQVVDLE9BQU8sRUFBRTtJQUMvQkMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLE9BQU8sQ0FBQztFQUN0QixDQUFDLENBQUM7QUFDSixDQUFDO0FBRUQsSUFBTUcsc0JBQXNCLEdBQUcsU0FBekJBLHNCQUFzQkEsQ0FBR1YsS0FBSyxFQUFJO0VBQ3RDLE9BQU9BLEtBQUssQ0FBQ1csTUFBTSxDQUFDLFVBQVVDLEVBQUUsRUFBRTtJQUNoQyxPQUFPLE9BQU9BLEVBQUUsS0FBSyxRQUFRO0VBQy9CLENBQUMsQ0FBQztBQUNKLENBQUM7O0FBR0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQUosT0FBTyxDQUFDQyxHQUFHLENBQUMsNkJBQTZCLENBQUM7QUFDMUMsSUFBTUksT0FBTyxHQUFHZixtQkFBbUIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUM3RFUsT0FBTyxDQUFDQyxHQUFHLENBQUNJLE9BQU8sQ0FBQztBQUVwQkwsT0FBTyxDQUFDQyxHQUFHLENBQUMsZUFBZSxDQUFDO0FBQzVCLElBQU1LLE9BQU8sR0FBR1osR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDekJNLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSyxPQUFPLENBQUM7QUFFcEJOLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLHNCQUFzQixDQUFDO0FBQ25DSixVQUFVLENBQUMsQ0FBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFFckRHLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGtDQUFrQyxDQUFDO0FBQy9DLElBQU1NLGFBQWEsR0FBR0wsc0JBQXNCLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQztBQUN2RkYsT0FBTyxDQUFDQyxHQUFHLENBQUNNLGFBQWEsQ0FBQzs7Ozs7Ozs7VUNuRDFCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LWFzeW5jLWF3YWl0Ly4vMDFfRHppZW5fMS8wMV9aYWRhbmlhLzAyX1phZGFuaWVfMi9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vZXM2LWFzeW5jLWF3YWl0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFByemVyw7NiIHBvbmnFvHN6ZSBtZXRvZHkgbmEgZnVua2NqZSBzdHJ6YcWCa293ZVxuICovXG4vLyBmdW5jdGlvbiBpc0FycmF5SW5jbHVkZVZhbHVlKHZhbHVlLCBhcnJheSkge1xuLy8gICByZXR1cm4gYXJyYXkuaW5jbHVkZXModmFsdWUpO1xuLy8gfVxuXG5mdW5jdGlvbiBpc0FycmF5SW5jbHVkZVZhbHVlKHZhbHVlLCBhcnJheSkge1xuICByZXR1cm4gYXJyYXkuaW5jbHVkZXModmFsdWUpO1xufVxuXG5mdW5jdGlvbiBzdW0obnVtMSwgbnVtMikge1xuICByZXR1cm4gbnVtMSArIG51bTI7XG59XG5cbi8vIGNvbnN0IHByaW50QXJyYXkgPSBmdW5jdGlvbiAoYXJyYXkpIHtcbi8vICAgYXJyYXkuZm9yRWFjaChmdW5jdGlvbiAoZWxlbWVudCkge1xuLy8gICAgIGNvbnNvbGUubG9nKGVsZW1lbnQpO1xuLy8gICB9KTtcbi8vIH07XG5cbmNvbnN0IHByaW50QXJyYXkgPSBhcnJheSA9PiB7XG4gIGFycmF5LmZvckVhY2goZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICBjb25zb2xlLmxvZyhlbGVtZW50KTtcbiAgfSk7XG59O1xuXG5jb25zdCBmaWx0ZXJOdW1iZXJzRnJvbUFycmF5ID0gYXJyYXkgPT4ge1xuICByZXR1cm4gYXJyYXkuZmlsdGVyKGZ1bmN0aW9uIChlbCkge1xuICAgIHJldHVybiB0eXBlb2YgZWwgPT09IFwibnVtYmVyXCI7XG4gIH0pO1xufTtcblxuXG4vKipcbiAqIFd5d2/FgmFuaWFcbiAqIE5pZSB6bWllbmlhaiBrb2R1IHBvbmnFvGVqIVxuICovXG5jb25zb2xlLmxvZyhcIi0tLSBpc0FycmF5SW5jbHVkZVZhbHVlIC0tLVwiKTtcbmNvbnN0IHJlc3VsdDEgPSBpc0FycmF5SW5jbHVkZVZhbHVlKDIsIFsxLCAyLCAzLCA1LCAzLCAyLCA1XSk7XG5jb25zb2xlLmxvZyhyZXN1bHQxKTtcblxuY29uc29sZS5sb2coXCJcXG4tLS0gc3VtIC0tLVwiKTtcbmNvbnN0IHJlc3VsdDIgPSBzdW0oMiwgMyk7XG5jb25zb2xlLmxvZyhyZXN1bHQyKTtcblxuY29uc29sZS5sb2coXCJcXG4tLS0gcHJpbnRBcnJheSAtLS1cIik7XG5wcmludEFycmF5KFtcIkFsYVwiLCBcIlpvc2lhXCIsIFwiRXdhXCIsIFwiUGlvdHJcIiwgXCJEYXJla1wiXSk7XG5cbmNvbnNvbGUubG9nKFwiXFxuLS0tIGZpbHRlck51bWJlcnNGcm9tQXJyYXkgLS0tXCIpO1xuY29uc3QgZmlsdGVyZWRBcnJheSA9IGZpbHRlck51bWJlcnNGcm9tQXJyYXkoW1wiQWxhXCIsIDUsIFwiRXdhXCIsIFwiUGlvdHJcIiwgMiwgXCJBZGFtXCIsIDE5XSk7XG5jb25zb2xlLmxvZyhmaWx0ZXJlZEFycmF5KTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIyNTc1YzRkMDc5ZTRmZWI0ODE4ZVwiKSJdLCJuYW1lcyI6WyJpc0FycmF5SW5jbHVkZVZhbHVlIiwidmFsdWUiLCJhcnJheSIsImluY2x1ZGVzIiwic3VtIiwibnVtMSIsIm51bTIiLCJwcmludEFycmF5IiwiZm9yRWFjaCIsImVsZW1lbnQiLCJjb25zb2xlIiwibG9nIiwiZmlsdGVyTnVtYmVyc0Zyb21BcnJheSIsImZpbHRlciIsImVsIiwicmVzdWx0MSIsInJlc3VsdDIiLCJmaWx0ZXJlZEFycmF5Il0sInNvdXJjZVJvb3QiOiIifQ==