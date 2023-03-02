self["webpackHotUpdatees6_async_await"](0,{

/***/ 23:
/***/ (() => {

var URL = 'https://pokeapi.co/api/v2/pokemon';
var ulElement = document.querySelector('.list-group');
fetch(URL).then(function (res) {
  return res.json();
}).then(function (data) {
  var pokemons = data.results;
  pokemons.forEach(function (pok) {
    return ulElement.innerHTML += "<li>".concat(pok.name, "</li>");
  });
})["catch"](function (resp) {
  return console.log(resp);
});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("ffbf6ae7aa8ed6449589")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4wYTAzMjM4MDYyZjMxNjRhMjgwZS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsSUFBTUEsR0FBRyxHQUFHLG1DQUFtQztBQUUvQyxJQUFNQyxTQUFTLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGFBQWEsQ0FBQztBQUV2REMsS0FBSyxDQUFDSixHQUFHLENBQUMsQ0FDTEssSUFBSSxDQUFDLFVBQUFDLEdBQUc7RUFBQSxPQUFJQSxHQUFHLENBQUNDLElBQUksRUFBRTtBQUFBLEVBQUMsQ0FDdkJGLElBQUksQ0FBQyxVQUFBRyxJQUFJLEVBQUk7RUFDVixJQUFNQyxRQUFRLEdBQUdELElBQUksQ0FBQ0UsT0FBTztFQUM3QkQsUUFBUSxDQUFDRSxPQUFPLENBQUMsVUFBQUMsR0FBRztJQUFBLE9BQUlYLFNBQVMsQ0FBQ1ksU0FBUyxXQUFBQyxNQUFBLENBQVdGLEdBQUcsQ0FBQ0csSUFBSSxVQUFPO0VBQUEsRUFBQztBQUMxRSxDQUFDLENBQUMsU0FDSSxDQUFDLFVBQUFDLElBQUk7RUFBQSxPQUFJQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsSUFBSSxDQUFDO0FBQUEsRUFBQzs7Ozs7Ozs7VUNWckMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtYXN5bmMtYXdhaXQvLi8wM19Eemllbl80LzAyX0ZldGNoLzAyX1phZGFuaWVfMi9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vZXM2LWFzeW5jLWF3YWl0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBVUkwgPSAnaHR0cHM6Ly9wb2tlYXBpLmNvL2FwaS92Mi9wb2tlbW9uJztcblxuY29uc3QgdWxFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpc3QtZ3JvdXAnKTtcblxuZmV0Y2goVVJMKVxuICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICBjb25zdCBwb2tlbW9ucyA9IGRhdGEucmVzdWx0cztcbiAgICAgICAgcG9rZW1vbnMuZm9yRWFjaChwb2sgPT4gdWxFbGVtZW50LmlubmVySFRNTCArPSBgPGxpPiR7cG9rLm5hbWV9PC9saT5gKVxuICAgIH0pXG4gICAgLmNhdGNoKHJlc3AgPT4gY29uc29sZS5sb2cocmVzcCkpO1xuXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJmZmJmNmFlN2FhOGVkNjQ0OTU4OVwiKSJdLCJuYW1lcyI6WyJVUkwiLCJ1bEVsZW1lbnQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwiZGF0YSIsInBva2Vtb25zIiwicmVzdWx0cyIsImZvckVhY2giLCJwb2siLCJpbm5lckhUTUwiLCJjb25jYXQiLCJuYW1lIiwicmVzcCIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9