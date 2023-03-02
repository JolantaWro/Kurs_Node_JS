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
/******/ 	__webpack_require__.h = () => ("423ae8ce5ef6b6492523")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC42MDhmMDNiNDJlM2FlZDI3ODhkMi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsSUFBTUEsR0FBRyxHQUFHLG1DQUFtQztBQUUvQyxJQUFNQyxTQUFTLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGFBQWEsQ0FBQztBQUV2REMsS0FBSyxDQUFDSixHQUFHLENBQUMsQ0FDTEssSUFBSSxDQUFDLFVBQUFDLEdBQUc7RUFBQSxPQUFJQSxHQUFHLENBQUNDLElBQUksRUFBRTtBQUFBLEVBQUMsQ0FDdkJGLElBQUksQ0FBQyxVQUFBRyxJQUFJLEVBQUk7RUFDVixJQUFNQyxRQUFRLEdBQUdELElBQUksQ0FBQ0UsT0FBTztFQUM3QkQsUUFBUSxDQUFDRSxPQUFPLENBQUMsVUFBQUwsR0FBRztJQUFBLE9BQUlMLFNBQVMsQ0FBQ1csU0FBUyxXQUFBQyxNQUFBLENBQVdQLEdBQUcsQ0FBQ1EsSUFBSSxVQUFPO0VBQUEsRUFBQztBQUMxRSxDQUFDLENBQUMsU0FDSSxDQUFDLFVBQUFDLElBQUk7RUFBQSxPQUFJQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsSUFBSSxDQUFDO0FBQUEsRUFBQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztVQ3hCQSIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1hc3luYy1hd2FpdC8uLzAzX0R6aWVuXzQvMDJfRmV0Y2gvMDJfWmFkYW5pZV8yL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9lczYtYXN5bmMtYXdhaXQvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFVSTCA9ICdodHRwczovL3Bva2VhcGkuY28vYXBpL3YyL3Bva2Vtb24nO1xuXG5jb25zdCB1bEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlzdC1ncm91cCcpO1xuXG5mZXRjaChVUkwpXG4gICAgLnRoZW4ocG9rID0+IHBvay5qc29uKCkpXG4gICAgLnRoZW4ocG9rcyA9PiB7XG4gICAgICAgIGNvbnN0IHBva2Vtb25zID0gcG9rcy5yZXN1bHRzO1xuICAgICAgICBwb2tlbW9ucy5mb3JFYWNoKHBvayA9PiB1bEVsZW1lbnQuaW5uZXJIVE1MICs9IGA8bGk+JHtwb2submFtZX08L2xpPmApXG4gICAgfSlcbiAgICAuY2F0Y2gocmVzcCA9PiBjb25zb2xlLmxvZyhyZXNwKSk7XG4vLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbigpIHtcbi8vICAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5saXN0LWdyb3VwXCIpO1xuLy8gICAgIGZldGNoKGBodHRwczovL3Bva2VhcGkuY28vYXBpL3YyL3Bva2Vtb25gKVxuLy8gICAgICAgICAudGhlbihyZXNwID0+IHtcbi8vICAgICAgICAgICAgIGlmKHJlc3Aub2sgJiYgcmVzcC5zdGF0dXMgPT09IDIwMCkge1xuLy8gICAgICAgICAgICAgICAgIHJldHVybiByZXNwLmpzb24oKVxuLy8gICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKHtzdGF0dXM6IHJlc3Auc3RhdHVzLCBtZXNzYWdlOiByZXNwLnN0YXR1c1RleHR9KVxuLy8gICAgICAgICB9KVxuLy8gICAgICAgICAudGhlbihwb2tzID0+IHtcbi8vICAgICAgICAgICAgIGNvbnN0IHBva2Vtb25zID0gcG9rcy5yZXN1bHRzO1xuLy8gICAgICAgICAgICAgcG9rZW1vbnMuZm9yRWFjaChwb2sgPT4gbGlzdC5pbm5lckhUTUwgKz0gYDxsaT4ke3Bvay5uYW1lfTwvbGk+YClcbi8vICAgICAgICAgfSkuY2F0Y2gocmVzcCA9PiBjb25zb2xlLmxvZyhyZXNwKSk7XG4vLyB9KTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI0MjNhZThjZTVlZjZiNjQ5MjUyM1wiKSJdLCJuYW1lcyI6WyJVUkwiLCJ1bEVsZW1lbnQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJmZXRjaCIsInRoZW4iLCJwb2siLCJqc29uIiwicG9rcyIsInBva2Vtb25zIiwicmVzdWx0cyIsImZvckVhY2giLCJpbm5lckhUTUwiLCJjb25jYXQiLCJuYW1lIiwicmVzcCIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9