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
          results = data.results[0];
          title.innerText = "".concat(results.name.first, " ").concat(results.name.last);
          email.innerText = results.email;
          console.log(results.email);
          console.log(results.name.first);
          console.log(results.name.last);
          // console.log(data.results)
          _context.next = 15;
          break;
        case 12:
          _context.prev = 12;
          _context.t0 = _context["catch"](0);
          console.error('Błąd');
        case 15:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 12]]);
  }));
  return _printInfo.apply(this, arguments);
}
printInfo();

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("618d26b8e3e0d0248924")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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X0F3YWl0LzAzX1phZGFuaWVfMy9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vZXM2LWFzeW5jLWF3YWl0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBodHRwczovL3JhbmRvbXVzZXIubWUvYXBpL1xyXG5cclxuLy8gWmRqxJljaWUgKC5jYXJkLWltZy10b3ApXHJcbi8vIEltacSZIGkgTmF6d2lza28gKC5jYXJkLXRpdGxlKVxyXG4vLyBFbWFpbCAoLmNhcmQtdGV4dClcclxuXHJcbmNvbnN0IGltYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmQtaW1nLXRvcCcpO1xyXG5jb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkLXRpdGxlJyk7XHJcbmNvbnN0IGVtYWlsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmQtdGV4dCcpO1xyXG4vL1xyXG4vLyBjb25zdCBmZXRjaFJhbmRvbVVzZXIgPSBhc3luYyAoKSA9PiB7XHJcbi8vICAgICB0cnkge1xyXG4vLyAgICAgICAgIGNvbnN0IHJlc3AgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9yYW5kb211c2VyLm1lL2FwaS8nKTtcclxuLy9cclxuLy8gICAgICAgICBjb25zdCB7IHJlc3VsdHMgfSA9IGF3YWl0IHJlc3AuanNvbigpO1xyXG4vL1xyXG4vLyAgICAgICAgIHJldHVybiByZXN1bHRzWzBdO1xyXG4vLyAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuLy8gICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuLy8gICAgIH1cclxuLy8gfTtcclxuLy9cclxuLy8gY29uc3QgZHJhd1VzZXIgPSBhc3luYyAoKSA9PiB7XHJcbi8vICAgICB0cnkge1xyXG4vLyAgICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBmZXRjaFJhbmRvbVVzZXIoKTtcclxuLy8gICAgICAgICBjb25zb2xlLmxvZygndXNlcicsIHVzZXIpO1xyXG4vL1xyXG4vLyAgICAgICAgIGltYWdlLnNyYyA9IHVzZXIucGljdHVyZS5sYXJnZTtcclxuLy8gICAgICAgICB0aXRsZS5pbm5lckhUTUwgPSB1c2VyLm5hbWUudGl0bGU7XHJcbi8vICAgICAgICAgZW1haWwuaW5uZXJIVE1MID0gdXNlci5lbWFpbDtcclxuLy8gICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbi8vICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbi8vICAgICB9XHJcbi8vIH07XHJcbi8vXHJcbi8vIGRyYXdVc2VyKCk7XHJcblxyXG5jb25zdCBVUkwgPSAnaHR0cHM6Ly9yYW5kb211c2VyLm1lL2FwaS8nXHJcblxyXG5jb25zdCBnZXRJbmZvID0gKGFkcmVzcykgPT4ge1xyXG4gICAgcmV0dXJuIGZldGNoKGFkcmVzcykudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgaWYgKHJlcy5vayAmJiByZXMuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKClcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQsWCxIVkXCIpXHJcbiAgICB9KVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBwcmludEluZm8gKCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0SW5mbyhVUkwpXHJcbiAgICAgICAgY29uc3QgcmVzdWx0cyA9IGRhdGEucmVzdWx0c1swXVxyXG4gICAgICAgIHRpdGxlLmlubmVyVGV4dCA9IGAke3Jlc3VsdHMubmFtZS5maXJzdH0gJHtyZXN1bHRzLm5hbWUubGFzdH1gXHJcbiAgICAgICAgZW1haWwuaW5uZXJUZXh0ID0gcmVzdWx0cy5lbWFpbFxyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdHMuZW1haWwpXHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0cy5uYW1lLmZpcnN0KVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdHMubmFtZS5sYXN0KVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGEucmVzdWx0cylcclxuICAgIH0gY2F0Y2gge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0LFgsSFZCcpXHJcbiAgICB9XHJcbn1cclxucHJpbnRJbmZvKCkiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI2MThkMjZiOGUzZTBkMDI0ODkyNFwiKSJdLCJuYW1lcyI6WyJpbWFnZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInRpdGxlIiwiZW1haWwiLCJVUkwiLCJnZXRJbmZvIiwiYWRyZXNzIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwib2siLCJzdGF0dXMiLCJqc29uIiwiRXJyb3IiLCJwcmludEluZm8iLCJfcHJpbnRJbmZvIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJfYXN5bmNUb0dlbmVyYXRvciIsIl9yZWdlbmVyYXRvclJ1bnRpbWUiLCJtYXJrIiwiX2NhbGxlZSIsImRhdGEiLCJyZXN1bHRzIiwid3JhcCIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJwcmV2IiwibmV4dCIsInNlbnQiLCJpbm5lclRleHQiLCJjb25jYXQiLCJuYW1lIiwiZmlyc3QiLCJsYXN0IiwiY29uc29sZSIsImxvZyIsInQwIiwiZXJyb3IiLCJzdG9wIl0sInNvdXJjZVJvb3QiOiIifQ==