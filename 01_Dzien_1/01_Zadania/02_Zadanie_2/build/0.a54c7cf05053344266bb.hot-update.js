self["webpackHotUpdatees6_async_await"](0,{

/***/ 23:
/***/ (() => {

/**
 * Przerób poniższe metody na funkcje strzałkowe
 */
// function isArrayIncludeValue(value, array) {
//   return array.includes(value);
// }

var isArrayIncludeValue = function isArrayIncludeValue(value, array) {
  return array.includes(value);
};
var sum = function sum(num1, num2) {
  return num1 + num2;
};

// const printArray = function (array) {
//   array.forEach(function (element) {
//     console.log(element);
//   });
// };

var printArray = function printArray(array) {
  array.forEach(function (element) {
    return console.log(element);
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
/******/ 	__webpack_require__.h = () => ("40f9c3224f2761366eee")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5hNTRjN2NmMDUwNTMzNDQyNjZiYi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBbUJBLENBQUlDLEtBQUssRUFBRUMsS0FBSztFQUFBLE9BQUtBLEtBQUssQ0FBQ0MsUUFBUSxDQUFDRixLQUFLLENBQUM7QUFBQTtBQUduRSxJQUFNRyxHQUFHLEdBQUcsU0FBTkEsR0FBR0EsQ0FBSUMsSUFBSSxFQUFFQyxJQUFJO0VBQUEsT0FBS0QsSUFBSSxHQUFHQyxJQUFJO0FBQUE7O0FBR3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQVVBLENBQUdMLEtBQUssRUFBSTtFQUMxQkEsS0FBSyxDQUFDTSxPQUFPLENBQUMsVUFBQUMsT0FBTztJQUFBLE9BQUlDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixPQUFPLENBQUM7RUFBQSxFQUFDO0FBQ2hELENBQUM7QUFFRCxJQUFNRyxzQkFBc0IsR0FBRyxTQUF6QkEsc0JBQXNCQSxDQUFHVixLQUFLLEVBQUk7RUFDdEMsT0FBT0EsS0FBSyxDQUFDVyxNQUFNLENBQUUsVUFBQUMsRUFBRSxFQUFJO0lBQ3pCLE9BQU8sT0FBT0EsRUFBRSxLQUFLLFFBQVE7RUFDL0IsQ0FBQyxDQUFDO0FBQ0osQ0FBQzs7QUFHRDtBQUNBO0FBQ0E7QUFDQTtBQUNBSixPQUFPLENBQUNDLEdBQUcsQ0FBQyw2QkFBNkIsQ0FBQztBQUMxQyxJQUFNSSxPQUFPLEdBQUdmLG1CQUFtQixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQzdEVSxPQUFPLENBQUNDLEdBQUcsQ0FBQ0ksT0FBTyxDQUFDO0FBRXBCTCxPQUFPLENBQUNDLEdBQUcsQ0FBQyxlQUFlLENBQUM7QUFDNUIsSUFBTUssT0FBTyxHQUFHWixHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUN6Qk0sT0FBTyxDQUFDQyxHQUFHLENBQUNLLE9BQU8sQ0FBQztBQUVwQk4sT0FBTyxDQUFDQyxHQUFHLENBQUMsc0JBQXNCLENBQUM7QUFDbkNKLFVBQVUsQ0FBQyxDQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztBQUVyREcsT0FBTyxDQUFDQyxHQUFHLENBQUMsa0NBQWtDLENBQUM7QUFDL0MsSUFBTU0sYUFBYSxHQUFHTCxzQkFBc0IsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ3ZGRixPQUFPLENBQUNDLEdBQUcsQ0FBQ00sYUFBYSxDQUFDOzs7Ozs7OztVQy9DMUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtYXN5bmMtYXdhaXQvLi8wMV9Eemllbl8xLzAxX1phZGFuaWEvMDJfWmFkYW5pZV8yL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9lczYtYXN5bmMtYXdhaXQvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogUHJ6ZXLDs2IgcG9uacW8c3plIG1ldG9keSBuYSBmdW5rY2plIHN0cnphxYJrb3dlXG4gKi9cbi8vIGZ1bmN0aW9uIGlzQXJyYXlJbmNsdWRlVmFsdWUodmFsdWUsIGFycmF5KSB7XG4vLyAgIHJldHVybiBhcnJheS5pbmNsdWRlcyh2YWx1ZSk7XG4vLyB9XG5cbmNvbnN0IGlzQXJyYXlJbmNsdWRlVmFsdWUgPSAodmFsdWUsIGFycmF5KSA9PiBhcnJheS5pbmNsdWRlcyh2YWx1ZSk7XG5cblxuY29uc3Qgc3VtID0gKG51bTEsIG51bTIpID0+IG51bTEgKyBudW0yO1xuXG5cbi8vIGNvbnN0IHByaW50QXJyYXkgPSBmdW5jdGlvbiAoYXJyYXkpIHtcbi8vICAgYXJyYXkuZm9yRWFjaChmdW5jdGlvbiAoZWxlbWVudCkge1xuLy8gICAgIGNvbnNvbGUubG9nKGVsZW1lbnQpO1xuLy8gICB9KTtcbi8vIH07XG5cbmNvbnN0IHByaW50QXJyYXkgPSBhcnJheSA9PiB7XG4gIGFycmF5LmZvckVhY2goZWxlbWVudCA9PiBjb25zb2xlLmxvZyhlbGVtZW50KSlcbn07XG5cbmNvbnN0IGZpbHRlck51bWJlcnNGcm9tQXJyYXkgPSBhcnJheSA9PiB7XG4gIHJldHVybiBhcnJheS5maWx0ZXIoIGVsID0+IHtcbiAgICByZXR1cm4gdHlwZW9mIGVsID09PSBcIm51bWJlclwiO1xuICB9KTtcbn07XG5cblxuLyoqXG4gKiBXeXdvxYJhbmlhXG4gKiBOaWUgem1pZW5pYWoga29kdSBwb25pxbxlaiFcbiAqL1xuY29uc29sZS5sb2coXCItLS0gaXNBcnJheUluY2x1ZGVWYWx1ZSAtLS1cIik7XG5jb25zdCByZXN1bHQxID0gaXNBcnJheUluY2x1ZGVWYWx1ZSgyLCBbMSwgMiwgMywgNSwgMywgMiwgNV0pO1xuY29uc29sZS5sb2cocmVzdWx0MSk7XG5cbmNvbnNvbGUubG9nKFwiXFxuLS0tIHN1bSAtLS1cIik7XG5jb25zdCByZXN1bHQyID0gc3VtKDIsIDMpO1xuY29uc29sZS5sb2cocmVzdWx0Mik7XG5cbmNvbnNvbGUubG9nKFwiXFxuLS0tIHByaW50QXJyYXkgLS0tXCIpO1xucHJpbnRBcnJheShbXCJBbGFcIiwgXCJab3NpYVwiLCBcIkV3YVwiLCBcIlBpb3RyXCIsIFwiRGFyZWtcIl0pO1xuXG5jb25zb2xlLmxvZyhcIlxcbi0tLSBmaWx0ZXJOdW1iZXJzRnJvbUFycmF5IC0tLVwiKTtcbmNvbnN0IGZpbHRlcmVkQXJyYXkgPSBmaWx0ZXJOdW1iZXJzRnJvbUFycmF5KFtcIkFsYVwiLCA1LCBcIkV3YVwiLCBcIlBpb3RyXCIsIDIsIFwiQWRhbVwiLCAxOV0pO1xuY29uc29sZS5sb2coZmlsdGVyZWRBcnJheSk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNDBmOWMzMjI0ZjI3NjEzNjZlZWVcIikiXSwibmFtZXMiOlsiaXNBcnJheUluY2x1ZGVWYWx1ZSIsInZhbHVlIiwiYXJyYXkiLCJpbmNsdWRlcyIsInN1bSIsIm51bTEiLCJudW0yIiwicHJpbnRBcnJheSIsImZvckVhY2giLCJlbGVtZW50IiwiY29uc29sZSIsImxvZyIsImZpbHRlck51bWJlcnNGcm9tQXJyYXkiLCJmaWx0ZXIiLCJlbCIsInJlc3VsdDEiLCJyZXN1bHQyIiwiZmlsdGVyZWRBcnJheSJdLCJzb3VyY2VSb290IjoiIn0=