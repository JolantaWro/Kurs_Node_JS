self["webpackHotUpdatees6_async_await"](0,{

/***/ 23:
/***/ (() => {

var URL = 'https://pokeapi.co/api/v2/pokemon';
var ulElement = document.querySelector('.list-group');
fetch(URL).then(function (pok) {
  return pok.json();
}).then(function (poks) {
  var pokemons = poks.results;
  pokemons.forEach(function (pok) {
    return ulElement.innerHTML += "<li>".concat(pok.name, "</li>");
  });
})["catch"](function (resp) {
  return console.log(resp);
});

// document.addEventListener("DOMContentLoaded", function() {
//     const list = document.querySelector(".list-group");
//     fetch(`https://pokeapi.co/api/v2/pokemon`)
//         .then(resp => {
//             if(resp.ok && resp.status === 200) {
//                 return resp.json()
//             }
//             throw new Error({status: resp.status, message: resp.statusText})
//         })
//         .then(poks => {
//             const pokemons = poks.results;
//             pokemons.forEach(pok => list.innerHTML += `<li>${pok.name}</li>`)
//         }).catch(resp => console.log(resp));
// });

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("c75ff598e78ed52d9d51")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC40NTM5Y2I1MzY5NjdiNmFjYjE2OS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsSUFBTUEsR0FBRyxHQUFHLG1DQUFtQztBQUUvQyxJQUFNQyxTQUFTLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGFBQWEsQ0FBQztBQUV2REMsS0FBSyxDQUFDSixHQUFHLENBQUMsQ0FDTEssSUFBSSxDQUFDLFVBQUFDLEdBQUc7RUFBQSxPQUFJQSxHQUFHLENBQUNDLElBQUksRUFBRTtBQUFBLEVBQUMsQ0FDdkJGLElBQUksQ0FBQyxVQUFBRyxJQUFJLEVBQUk7RUFDVixJQUFNQyxRQUFRLEdBQUdELElBQUksQ0FBQ0UsT0FBTztFQUM3QkQsUUFBUSxDQUFDRSxPQUFPLENBQUMsVUFBQUwsR0FBRztJQUFBLE9BQUlMLFNBQVMsQ0FBQ1csU0FBUyxXQUFBQyxNQUFBLENBQVdQLEdBQUcsQ0FBQ1EsSUFBSSxVQUFPO0VBQUEsRUFBQztBQUMxRSxDQUFDLENBQUMsU0FDSSxDQUFDLFVBQUFDLElBQUk7RUFBQSxPQUFJQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsSUFBSSxDQUFDO0FBQUEsRUFBQzs7QUFFckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7VUN6QkEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtYXN5bmMtYXdhaXQvLi8wM19Eemllbl80LzAyX0ZldGNoLzAyX1phZGFuaWVfMi9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vZXM2LWFzeW5jLWF3YWl0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBVUkwgPSAnaHR0cHM6Ly9wb2tlYXBpLmNvL2FwaS92Mi9wb2tlbW9uJztcblxuY29uc3QgdWxFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpc3QtZ3JvdXAnKTtcblxuZmV0Y2goVVJMKVxuICAgIC50aGVuKHBvayA9PiBwb2suanNvbigpKVxuICAgIC50aGVuKHBva3MgPT4ge1xuICAgICAgICBjb25zdCBwb2tlbW9ucyA9IHBva3MucmVzdWx0cztcbiAgICAgICAgcG9rZW1vbnMuZm9yRWFjaChwb2sgPT4gdWxFbGVtZW50LmlubmVySFRNTCArPSBgPGxpPiR7cG9rLm5hbWV9PC9saT5gKVxuICAgIH0pXG4gICAgLmNhdGNoKHJlc3AgPT4gY29uc29sZS5sb2cocmVzcCkpO1xuXG4vLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbigpIHtcbi8vICAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5saXN0LWdyb3VwXCIpO1xuLy8gICAgIGZldGNoKGBodHRwczovL3Bva2VhcGkuY28vYXBpL3YyL3Bva2Vtb25gKVxuLy8gICAgICAgICAudGhlbihyZXNwID0+IHtcbi8vICAgICAgICAgICAgIGlmKHJlc3Aub2sgJiYgcmVzcC5zdGF0dXMgPT09IDIwMCkge1xuLy8gICAgICAgICAgICAgICAgIHJldHVybiByZXNwLmpzb24oKVxuLy8gICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKHtzdGF0dXM6IHJlc3Auc3RhdHVzLCBtZXNzYWdlOiByZXNwLnN0YXR1c1RleHR9KVxuLy8gICAgICAgICB9KVxuLy8gICAgICAgICAudGhlbihwb2tzID0+IHtcbi8vICAgICAgICAgICAgIGNvbnN0IHBva2Vtb25zID0gcG9rcy5yZXN1bHRzO1xuLy8gICAgICAgICAgICAgcG9rZW1vbnMuZm9yRWFjaChwb2sgPT4gbGlzdC5pbm5lckhUTUwgKz0gYDxsaT4ke3Bvay5uYW1lfTwvbGk+YClcbi8vICAgICAgICAgfSkuY2F0Y2gocmVzcCA9PiBjb25zb2xlLmxvZyhyZXNwKSk7XG4vLyB9KTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJjNzVmZjU5OGU3OGVkNTJkOWQ1MVwiKSJdLCJuYW1lcyI6WyJVUkwiLCJ1bEVsZW1lbnQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJmZXRjaCIsInRoZW4iLCJwb2siLCJqc29uIiwicG9rcyIsInBva2Vtb25zIiwicmVzdWx0cyIsImZvckVhY2giLCJpbm5lckhUTUwiLCJjb25jYXQiLCJuYW1lIiwicmVzcCIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9