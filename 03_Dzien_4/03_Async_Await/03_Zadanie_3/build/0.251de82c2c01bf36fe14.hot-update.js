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
          _context.prev = 0;
          _context.next = 3;
          return getInfo(URL);
        case 3:
          data = _context.sent;
          results = data.results[0]; // title.innerHTML = data.r
          console.log(results.email);
          console.log(results.name);
          // console.log(data.results)
          _context.next = 12;
          break;
        case 9:
          _context.prev = 9;
          _context.t0 = _context["catch"](0);
          console.error('Błąd');
        case 12:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 9]]);
  }));
  return _printInfo.apply(this, arguments);
}
printInfo();

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("b7c5c336cba44f104cf9")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4yNTFkZTgyYzJjMDFiZjM2ZmUxNC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxLQUFLLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGVBQWUsQ0FBQztBQUNyRCxJQUFNQyxLQUFLLEdBQUdGLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGFBQWEsQ0FBQztBQUNuRCxJQUFNRSxLQUFLLEdBQUdILFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFlBQVksQ0FBQztBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUcsR0FBRyxHQUFHLDRCQUE0QjtBQUV4QyxJQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBT0EsQ0FBSUMsTUFBTSxFQUFLO0VBQ3hCLE9BQU9DLEtBQUssQ0FBQ0QsTUFBTSxDQUFDLENBQUNFLElBQUksQ0FBQyxVQUFDQyxHQUFHLEVBQUs7SUFDL0IsSUFBSUEsR0FBRyxDQUFDQyxFQUFFLElBQUlELEdBQUcsQ0FBQ0UsTUFBTSxLQUFLLEdBQUcsRUFBRTtNQUM5QixPQUFPRixHQUFHLENBQUNHLElBQUksRUFBRTtJQUNyQjtJQUNBLE1BQU0sSUFBSUMsS0FBSyxDQUFDLE1BQU0sQ0FBQztFQUMzQixDQUFDLENBQUM7QUFDTixDQUFDO0FBQUEsU0FFY0MsU0FBU0EsQ0FBQTtFQUFBLE9BQUFDLFVBQUEsQ0FBQUMsS0FBQSxPQUFBQyxTQUFBO0FBQUE7QUFBQSxTQUFBRixXQUFBO0VBQUFBLFVBQUEsR0FBQUcsbUZBQUEsZUFBQUMsc0VBQUEsQ0FBeEIsU0FBQUUsUUFBQTtJQUFBLElBQUFDLElBQUEsRUFBQUMsT0FBQTtJQUFBLE9BQUFKLHNFQUFBLFVBQUFNLFNBQUFDLFFBQUE7TUFBQSxrQkFBQUEsUUFBQSxDQUFBQyxJQUFBLEdBQUFELFFBQUEsQ0FBQUUsSUFBQTtRQUFBO1VBQUFGLFFBQUEsQ0FBQUMsSUFBQTtVQUFBRCxRQUFBLENBQUFFLElBQUE7VUFBQSxPQUUyQnZCLE9BQU8sQ0FBQ0QsR0FBRyxDQUFDO1FBQUE7VUFBekJrQixJQUFJLEdBQUFJLFFBQUEsQ0FBQUcsSUFBQTtVQUNKTixPQUFPLEdBQUdELElBQUksQ0FBQ0MsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUMvQjtVQUNBTyxPQUFPLENBQUNDLEdBQUcsQ0FBQ1IsT0FBTyxDQUFDcEIsS0FBSyxDQUFDO1VBQzFCMkIsT0FBTyxDQUFDQyxHQUFHLENBQUNSLE9BQU8sQ0FBQ1MsSUFBSSxDQUFDO1VBQ3pCO1VBQUFOLFFBQUEsQ0FBQUUsSUFBQTtVQUFBO1FBQUE7VUFBQUYsUUFBQSxDQUFBQyxJQUFBO1VBQUFELFFBQUEsQ0FBQU8sRUFBQSxHQUFBUCxRQUFBO1VBRUFJLE9BQU8sQ0FBQ0ksS0FBSyxDQUFDLE1BQU0sQ0FBQztRQUFBO1FBQUE7VUFBQSxPQUFBUixRQUFBLENBQUFTLElBQUE7TUFBQTtJQUFBLEdBQUFkLE9BQUE7RUFBQSxDQUU1QjtFQUFBLE9BQUFOLFVBQUEsQ0FBQUMsS0FBQSxPQUFBQyxTQUFBO0FBQUE7QUFDREgsU0FBUyxFQUFFOzs7Ozs7OztVQzVEWCIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1hc3luYy1hd2FpdC8uLzAzX0R6aWVuXzQvMDNfQXN5bmNfQXdhaXQvMDNfWmFkYW5pZV8zL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9lczYtYXN5bmMtYXdhaXQvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGh0dHBzOi8vcmFuZG9tdXNlci5tZS9hcGkvXHJcblxyXG4vLyBaZGrEmWNpZSAoLmNhcmQtaW1nLXRvcClcclxuLy8gSW1pxJkgaSBOYXp3aXNrbyAoLmNhcmQtdGl0bGUpXHJcbi8vIEVtYWlsICguY2FyZC10ZXh0KVxyXG5cclxuY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZC1pbWctdG9wJyk7XHJcbmNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmQtdGl0bGUnKTtcclxuY29uc3QgZW1haWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZC10ZXh0Jyk7XHJcbi8vXHJcbi8vIGNvbnN0IGZldGNoUmFuZG9tVXNlciA9IGFzeW5jICgpID0+IHtcclxuLy8gICAgIHRyeSB7XHJcbi8vICAgICAgICAgY29uc3QgcmVzcCA9IGF3YWl0IGZldGNoKCdodHRwczovL3JhbmRvbXVzZXIubWUvYXBpLycpO1xyXG4vL1xyXG4vLyAgICAgICAgIGNvbnN0IHsgcmVzdWx0cyB9ID0gYXdhaXQgcmVzcC5qc29uKCk7XHJcbi8vXHJcbi8vICAgICAgICAgcmV0dXJuIHJlc3VsdHNbMF07XHJcbi8vICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4vLyAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4vLyAgICAgfVxyXG4vLyB9O1xyXG4vL1xyXG4vLyBjb25zdCBkcmF3VXNlciA9IGFzeW5jICgpID0+IHtcclxuLy8gICAgIHRyeSB7XHJcbi8vICAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IGZldGNoUmFuZG9tVXNlcigpO1xyXG4vLyAgICAgICAgIGNvbnNvbGUubG9nKCd1c2VyJywgdXNlcik7XHJcbi8vXHJcbi8vICAgICAgICAgaW1hZ2Uuc3JjID0gdXNlci5waWN0dXJlLmxhcmdlO1xyXG4vLyAgICAgICAgIHRpdGxlLmlubmVySFRNTCA9IHVzZXIubmFtZS50aXRsZTtcclxuLy8gICAgICAgICBlbWFpbC5pbm5lckhUTUwgPSB1c2VyLmVtYWlsO1xyXG4vLyAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuLy8gICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuLy8gICAgIH1cclxuLy8gfTtcclxuLy9cclxuLy8gZHJhd1VzZXIoKTtcclxuXHJcbmNvbnN0IFVSTCA9ICdodHRwczovL3JhbmRvbXVzZXIubWUvYXBpLydcclxuXHJcbmNvbnN0IGdldEluZm8gPSAoYWRyZXNzKSA9PiB7XHJcbiAgICByZXR1cm4gZmV0Y2goYWRyZXNzKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICBpZiAocmVzLm9rICYmIHJlcy5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJCxYLEhWRcIilcclxuICAgIH0pXHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHByaW50SW5mbyAoKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXRJbmZvKFVSTClcclxuICAgICAgICBjb25zdCByZXN1bHRzID0gZGF0YS5yZXN1bHRzWzBdXHJcbiAgICAgICAgLy8gdGl0bGUuaW5uZXJIVE1MID0gZGF0YS5yXHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0cy5lbWFpbClcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHRzLm5hbWUpXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coZGF0YS5yZXN1bHRzKVxyXG4gICAgfSBjYXRjaCB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignQsWCxIVkJylcclxuICAgIH1cclxufVxyXG5wcmludEluZm8oKSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImI3YzVjMzM2Y2JhNDRmMTA0Y2Y5XCIpIl0sIm5hbWVzIjpbImltYWdlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwidGl0bGUiLCJlbWFpbCIsIlVSTCIsImdldEluZm8iLCJhZHJlc3MiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJvayIsInN0YXR1cyIsImpzb24iLCJFcnJvciIsInByaW50SW5mbyIsIl9wcmludEluZm8iLCJhcHBseSIsImFyZ3VtZW50cyIsIl9hc3luY1RvR2VuZXJhdG9yIiwiX3JlZ2VuZXJhdG9yUnVudGltZSIsIm1hcmsiLCJfY2FsbGVlIiwiZGF0YSIsInJlc3VsdHMiLCJ3cmFwIiwiX2NhbGxlZSQiLCJfY29udGV4dCIsInByZXYiLCJuZXh0Iiwic2VudCIsImNvbnNvbGUiLCJsb2ciLCJuYW1lIiwidDAiLCJlcnJvciIsInN0b3AiXSwic291cmNlUm9vdCI6IiJ9