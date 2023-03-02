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

// fetch(URL)
//     .then(res => res.json())
//     .then(data => console.log(data))
//     .catch(err => console.error(err))
//
// async function test2(){
//     try {
//         const res = await fetch(URL)
//         const data = await res.json()
//         console.log(data)
//     } catch {
//         console.error('Błąd')
//     }
// }
//
// test2()

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
    var data;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return getInfo(URL);
        case 3:
          data = _context.sent;
          console.log(data);
          _context.next = 10;
          break;
        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          console.error('Błąd');
        case 10:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 7]]);
  }));
  return _printInfo.apply(this, arguments);
}
printInfo();

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("89d01ef9b082894e1d42")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5mYzM2MDY0MTg4MDk5ZWEzMmM2ZS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxLQUFLLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGVBQWUsQ0FBQztBQUNyRCxJQUFNQyxLQUFLLEdBQUdGLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGFBQWEsQ0FBQztBQUNuRCxJQUFNRSxLQUFLLEdBQUdILFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFlBQVksQ0FBQztBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUcsR0FBRyxHQUFHLDRCQUE0Qjs7QUFFeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQU9BLENBQUlDLE1BQU0sRUFBSztFQUN4QixPQUFPQyxLQUFLLENBQUNELE1BQU0sQ0FBQyxDQUFDRSxJQUFJLENBQUMsVUFBQ0MsR0FBRyxFQUFLO0lBQy9CLElBQUlBLEdBQUcsQ0FBQ0MsRUFBRSxJQUFJRCxHQUFHLENBQUNFLE1BQU0sS0FBSyxHQUFHLEVBQUU7TUFDOUIsT0FBT0YsR0FBRyxDQUFDRyxJQUFJLEVBQUU7SUFDckI7SUFDQSxNQUFNLElBQUlDLEtBQUssQ0FBQyxNQUFNLENBQUM7RUFDM0IsQ0FBQyxDQUFDO0FBQ04sQ0FBQztBQUFBLFNBRWNDLFNBQVNBLENBQUE7RUFBQSxPQUFBQyxVQUFBLENBQUFDLEtBQUEsT0FBQUMsU0FBQTtBQUFBO0FBQUEsU0FBQUYsV0FBQTtFQUFBQSxVQUFBLEdBQUFHLG1GQUFBLGVBQUFDLHNFQUFBLENBQXhCLFNBQUFFLFFBQUE7SUFBQSxJQUFBQyxJQUFBO0lBQUEsT0FBQUgsc0VBQUEsVUFBQUssU0FBQUMsUUFBQTtNQUFBLGtCQUFBQSxRQUFBLENBQUFDLElBQUEsR0FBQUQsUUFBQSxDQUFBRSxJQUFBO1FBQUE7VUFBQUYsUUFBQSxDQUFBQyxJQUFBO1VBQUFELFFBQUEsQ0FBQUUsSUFBQTtVQUFBLE9BRTJCdEIsT0FBTyxDQUFDRCxHQUFHLENBQUM7UUFBQTtVQUF6QmtCLElBQUksR0FBQUcsUUFBQSxDQUFBRyxJQUFBO1VBQ1ZDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDUixJQUFJLENBQUM7VUFBQUcsUUFBQSxDQUFBRSxJQUFBO1VBQUE7UUFBQTtVQUFBRixRQUFBLENBQUFDLElBQUE7VUFBQUQsUUFBQSxDQUFBTSxFQUFBLEdBQUFOLFFBQUE7VUFFakJJLE9BQU8sQ0FBQ0csS0FBSyxDQUFDLE1BQU0sQ0FBQztRQUFBO1FBQUE7VUFBQSxPQUFBUCxRQUFBLENBQUFRLElBQUE7TUFBQTtJQUFBLEdBQUFaLE9BQUE7RUFBQSxDQUU1QjtFQUFBLE9BQUFOLFVBQUEsQ0FBQUMsS0FBQSxPQUFBQyxTQUFBO0FBQUE7QUFDREgsU0FBUyxFQUFFOzs7Ozs7OztVQ3pFWCIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1hc3luYy1hd2FpdC8uLzAzX0R6aWVuXzQvMDNfQXN5bmNfQXdhaXQvMDNfWmFkYW5pZV8zL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9lczYtYXN5bmMtYXdhaXQvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGh0dHBzOi8vcmFuZG9tdXNlci5tZS9hcGkvXHJcblxyXG4vLyBaZGrEmWNpZSAoLmNhcmQtaW1nLXRvcClcclxuLy8gSW1pxJkgaSBOYXp3aXNrbyAoLmNhcmQtdGl0bGUpXHJcbi8vIEVtYWlsICguY2FyZC10ZXh0KVxyXG5cclxuY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZC1pbWctdG9wJyk7XHJcbmNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmQtdGl0bGUnKTtcclxuY29uc3QgZW1haWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZC10ZXh0Jyk7XHJcbi8vXHJcbi8vIGNvbnN0IGZldGNoUmFuZG9tVXNlciA9IGFzeW5jICgpID0+IHtcclxuLy8gICAgIHRyeSB7XHJcbi8vICAgICAgICAgY29uc3QgcmVzcCA9IGF3YWl0IGZldGNoKCdodHRwczovL3JhbmRvbXVzZXIubWUvYXBpLycpO1xyXG4vL1xyXG4vLyAgICAgICAgIGNvbnN0IHsgcmVzdWx0cyB9ID0gYXdhaXQgcmVzcC5qc29uKCk7XHJcbi8vXHJcbi8vICAgICAgICAgcmV0dXJuIHJlc3VsdHNbMF07XHJcbi8vICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4vLyAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4vLyAgICAgfVxyXG4vLyB9O1xyXG4vL1xyXG4vLyBjb25zdCBkcmF3VXNlciA9IGFzeW5jICgpID0+IHtcclxuLy8gICAgIHRyeSB7XHJcbi8vICAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IGZldGNoUmFuZG9tVXNlcigpO1xyXG4vLyAgICAgICAgIGNvbnNvbGUubG9nKCd1c2VyJywgdXNlcik7XHJcbi8vXHJcbi8vICAgICAgICAgaW1hZ2Uuc3JjID0gdXNlci5waWN0dXJlLmxhcmdlO1xyXG4vLyAgICAgICAgIHRpdGxlLmlubmVySFRNTCA9IHVzZXIubmFtZS50aXRsZTtcclxuLy8gICAgICAgICBlbWFpbC5pbm5lckhUTUwgPSB1c2VyLmVtYWlsO1xyXG4vLyAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuLy8gICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuLy8gICAgIH1cclxuLy8gfTtcclxuLy9cclxuLy8gZHJhd1VzZXIoKTtcclxuXHJcbmNvbnN0IFVSTCA9ICdodHRwczovL3JhbmRvbXVzZXIubWUvYXBpLydcclxuXHJcbi8vIGZldGNoKFVSTClcclxuLy8gICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxyXG4vLyAgICAgLnRoZW4oZGF0YSA9PiBjb25zb2xlLmxvZyhkYXRhKSlcclxuLy8gICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcihlcnIpKVxyXG4vL1xyXG4vLyBhc3luYyBmdW5jdGlvbiB0ZXN0Migpe1xyXG4vLyAgICAgdHJ5IHtcclxuLy8gICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChVUkwpXHJcbi8vICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKClcclxuLy8gICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG4vLyAgICAgfSBjYXRjaCB7XHJcbi8vICAgICAgICAgY29uc29sZS5lcnJvcignQsWCxIVkJylcclxuLy8gICAgIH1cclxuLy8gfVxyXG4vL1xyXG4vLyB0ZXN0MigpXHJcblxyXG5jb25zdCBnZXRJbmZvID0gKGFkcmVzcykgPT4ge1xyXG4gICAgcmV0dXJuIGZldGNoKGFkcmVzcykudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgaWYgKHJlcy5vayAmJiByZXMuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKClcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQsWCxIVkXCIpXHJcbiAgICB9KVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBwcmludEluZm8gKCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0SW5mbyhVUkwpXHJcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgIH0gY2F0Y2gge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0LFgsSFZCcpXHJcbiAgICB9XHJcbn1cclxucHJpbnRJbmZvKCkiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI4OWQwMWVmOWIwODI4OTRlMWQ0MlwiKSJdLCJuYW1lcyI6WyJpbWFnZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInRpdGxlIiwiZW1haWwiLCJVUkwiLCJnZXRJbmZvIiwiYWRyZXNzIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwib2siLCJzdGF0dXMiLCJqc29uIiwiRXJyb3IiLCJwcmludEluZm8iLCJfcHJpbnRJbmZvIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJfYXN5bmNUb0dlbmVyYXRvciIsIl9yZWdlbmVyYXRvclJ1bnRpbWUiLCJtYXJrIiwiX2NhbGxlZSIsImRhdGEiLCJ3cmFwIiwiX2NhbGxlZSQiLCJfY29udGV4dCIsInByZXYiLCJuZXh0Iiwic2VudCIsImNvbnNvbGUiLCJsb2ciLCJ0MCIsImVycm9yIiwic3RvcCJdLCJzb3VyY2VSb290IjoiIn0=