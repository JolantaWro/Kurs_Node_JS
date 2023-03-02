"use strict";
self["webpackHotUpdatees6_async_await"](0,{

/***/ 23:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);


// https://randomuser.me/api/

// Zdjęcie (.card-img-top)
// Imię i Nazwisko (.card-title)
// Email (.card-text)

var image = document.querySelector('.card-img-top');
var title = document.querySelector('.card-title');
var email = document.querySelector('.card-text');
//
// const fetchRandomUser = async () => {
//     try {
//         const resp = await fetch('https://randomuser.me/api/');
//
//         const { results } = await resp.json();
//
//         return results[0];
//     } catch (error) {
//         console.error(error);
//     }
// };
//
// const drawUser = async () => {
//     try {
//         const user = await fetchRandomUser();
//         console.log('user', user);
//
//         image.src = user.picture.large;
//         title.innerHTML = user.name.title;
//         email.innerHTML = user.email;
//     } catch (error) {
//         console.error(error);
//     }
// };
//
// drawUser();

var URL = 'https://randomuser.me/api/';
var getInfo = function getInfo(adress) {
  return fetch(adress).then(function (res) {
    if (res.ok && res.status === 200) {
      return res.json();
    }
    throw new Error("Błąd");
  });
};
function printInfo() {
  return _printInfo.apply(this, arguments);
}
function _printInfo() {
  _printInfo = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
    var data, results;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          try {
            data = getInfo(URL);
            results = data.results;
            console.log(results);
          } catch (_unused) {
            console.error('Błąd');
          }
        case 1:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _printInfo.apply(this, arguments);
}
printInfo();

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("1bf2a405ca69043d31ca")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5iZDM3NjZmZjkwNmViM2I2YjZjNC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxLQUFLLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGVBQWUsQ0FBQztBQUNyRCxJQUFNQyxLQUFLLEdBQUdGLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGFBQWEsQ0FBQztBQUNuRCxJQUFNRSxLQUFLLEdBQUdILFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFlBQVksQ0FBQztBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUcsR0FBRyxHQUFHLDRCQUE0QjtBQUV4QyxJQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBT0EsQ0FBSUMsTUFBTSxFQUFLO0VBQ3hCLE9BQU9DLEtBQUssQ0FBQ0QsTUFBTSxDQUFDLENBQUNFLElBQUksQ0FBQyxVQUFDQyxHQUFHLEVBQUs7SUFDL0IsSUFBSUEsR0FBRyxDQUFDQyxFQUFFLElBQUlELEdBQUcsQ0FBQ0UsTUFBTSxLQUFLLEdBQUcsRUFBRTtNQUM5QixPQUFPRixHQUFHLENBQUNHLElBQUksRUFBRTtJQUNyQjtJQUNBLE1BQU0sSUFBSUMsS0FBSyxDQUFDLE1BQU0sQ0FBQztFQUMzQixDQUFDLENBQUM7QUFDTixDQUFDO0FBQUEsU0FFY0MsU0FBU0EsQ0FBQTtFQUFBLE9BQUFDLFVBQUEsQ0FBQUMsS0FBQSxPQUFBQyxTQUFBO0FBQUE7QUFBQSxTQUFBRixXQUFBO0VBQUFBLFVBQUEsR0FBQUcsbUZBQUEsZUFBQUMsc0VBQUEsQ0FBeEIsU0FBQUUsUUFBQTtJQUFBLElBQUFDLElBQUEsRUFBQUMsT0FBQTtJQUFBLE9BQUFKLHNFQUFBLFVBQUFNLFNBQUFDLFFBQUE7TUFBQSxrQkFBQUEsUUFBQSxDQUFBQyxJQUFBLEdBQUFELFFBQUEsQ0FBQUUsSUFBQTtRQUFBO1VBQ0ksSUFBSTtZQUNNTixJQUFJLEdBQUdqQixPQUFPLENBQUNELEdBQUcsQ0FBQztZQUNsQm1CLE9BQU8sR0FBSUQsSUFBSSxDQUFmQyxPQUFPO1lBQ2RNLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDUCxPQUFPLENBQUM7VUFDeEIsQ0FBQyxDQUFDLE9BQUFRLE9BQUEsRUFBTTtZQUNKRixPQUFPLENBQUNHLEtBQUssQ0FBQyxNQUFNLENBQUM7VUFDekI7UUFBQztRQUFBO1VBQUEsT0FBQU4sUUFBQSxDQUFBTyxJQUFBO01BQUE7SUFBQSxHQUFBWixPQUFBO0VBQUEsQ0FDSjtFQUFBLE9BQUFOLFVBQUEsQ0FBQUMsS0FBQSxPQUFBQyxTQUFBO0FBQUE7QUFDREgsU0FBUyxFQUFFOzs7Ozs7OztVQ3pEWCIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1hc3luYy1hd2FpdC8uLzAzX0R6aWVuXzQvMDNfQXN5bmNfQXdhaXQvMDNfWmFkYW5pZV8zL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9lczYtYXN5bmMtYXdhaXQvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGh0dHBzOi8vcmFuZG9tdXNlci5tZS9hcGkvXHJcblxyXG4vLyBaZGrEmWNpZSAoLmNhcmQtaW1nLXRvcClcclxuLy8gSW1pxJkgaSBOYXp3aXNrbyAoLmNhcmQtdGl0bGUpXHJcbi8vIEVtYWlsICguY2FyZC10ZXh0KVxyXG5cclxuY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZC1pbWctdG9wJyk7XHJcbmNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmQtdGl0bGUnKTtcclxuY29uc3QgZW1haWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZC10ZXh0Jyk7XHJcbi8vXHJcbi8vIGNvbnN0IGZldGNoUmFuZG9tVXNlciA9IGFzeW5jICgpID0+IHtcclxuLy8gICAgIHRyeSB7XHJcbi8vICAgICAgICAgY29uc3QgcmVzcCA9IGF3YWl0IGZldGNoKCdodHRwczovL3JhbmRvbXVzZXIubWUvYXBpLycpO1xyXG4vL1xyXG4vLyAgICAgICAgIGNvbnN0IHsgcmVzdWx0cyB9ID0gYXdhaXQgcmVzcC5qc29uKCk7XHJcbi8vXHJcbi8vICAgICAgICAgcmV0dXJuIHJlc3VsdHNbMF07XHJcbi8vICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4vLyAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4vLyAgICAgfVxyXG4vLyB9O1xyXG4vL1xyXG4vLyBjb25zdCBkcmF3VXNlciA9IGFzeW5jICgpID0+IHtcclxuLy8gICAgIHRyeSB7XHJcbi8vICAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IGZldGNoUmFuZG9tVXNlcigpO1xyXG4vLyAgICAgICAgIGNvbnNvbGUubG9nKCd1c2VyJywgdXNlcik7XHJcbi8vXHJcbi8vICAgICAgICAgaW1hZ2Uuc3JjID0gdXNlci5waWN0dXJlLmxhcmdlO1xyXG4vLyAgICAgICAgIHRpdGxlLmlubmVySFRNTCA9IHVzZXIubmFtZS50aXRsZTtcclxuLy8gICAgICAgICBlbWFpbC5pbm5lckhUTUwgPSB1c2VyLmVtYWlsO1xyXG4vLyAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuLy8gICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuLy8gICAgIH1cclxuLy8gfTtcclxuLy9cclxuLy8gZHJhd1VzZXIoKTtcclxuXHJcbmNvbnN0IFVSTCA9ICdodHRwczovL3JhbmRvbXVzZXIubWUvYXBpLydcclxuXHJcbmNvbnN0IGdldEluZm8gPSAoYWRyZXNzKSA9PiB7XHJcbiAgICByZXR1cm4gZmV0Y2goYWRyZXNzKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICBpZiAocmVzLm9rICYmIHJlcy5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJCxYLEhWRcIilcclxuICAgIH0pXHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHByaW50SW5mbyAoKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBnZXRJbmZvKFVSTClcclxuICAgICAgICBjb25zdCB7cmVzdWx0c30gPSBkYXRhXHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0cylcclxuICAgIH0gY2F0Y2gge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0LFgsSFZCcpXHJcbiAgICB9XHJcbn1cclxucHJpbnRJbmZvKCkiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIxYmYyYTQwNWNhNjkwNDNkMzFjYVwiKSJdLCJuYW1lcyI6WyJpbWFnZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInRpdGxlIiwiZW1haWwiLCJVUkwiLCJnZXRJbmZvIiwiYWRyZXNzIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwib2siLCJzdGF0dXMiLCJqc29uIiwiRXJyb3IiLCJwcmludEluZm8iLCJfcHJpbnRJbmZvIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJfYXN5bmNUb0dlbmVyYXRvciIsIl9yZWdlbmVyYXRvclJ1bnRpbWUiLCJtYXJrIiwiX2NhbGxlZSIsImRhdGEiLCJyZXN1bHRzIiwid3JhcCIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJwcmV2IiwibmV4dCIsImNvbnNvbGUiLCJsb2ciLCJfdW51c2VkIiwiZXJyb3IiLCJzdG9wIl0sInNvdXJjZVJvb3QiOiIifQ==