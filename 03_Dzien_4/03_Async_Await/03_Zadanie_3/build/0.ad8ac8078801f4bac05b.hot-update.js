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
  var URL = adress;
  return fetch(URL).then(function (res) {
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
          try {
            data = getInfo(URL);
            console.log(data);
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
/******/ 	__webpack_require__.h = () => ("8187e7a1d0b634218d1a")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5hZDhhYzgwNzg4MDFmNGJhYzA1Yi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxLQUFLLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGVBQWUsQ0FBQztBQUNyRCxJQUFNQyxLQUFLLEdBQUdGLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGFBQWEsQ0FBQztBQUNuRCxJQUFNRSxLQUFLLEdBQUdILFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFlBQVksQ0FBQztBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUcsR0FBRyxHQUFHLDRCQUE0QjtBQUV4QyxJQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBT0EsQ0FBSUMsTUFBTSxFQUFLO0VBQ3hCLElBQU1GLEdBQUcsR0FBR0UsTUFBTTtFQUVsQixPQUFPQyxLQUFLLENBQUNILEdBQUcsQ0FBQyxDQUFDSSxJQUFJLENBQUMsVUFBQ0MsR0FBRyxFQUFLO0lBQzVCLElBQUlBLEdBQUcsQ0FBQ0MsRUFBRSxJQUFJRCxHQUFHLENBQUNFLE1BQU0sS0FBSyxHQUFHLEVBQUU7TUFDOUIsT0FBT0YsR0FBRyxDQUFDRyxJQUFJLEVBQUU7SUFDckI7SUFDQSxNQUFNLElBQUlDLEtBQUssQ0FBQyxNQUFNLENBQUM7RUFDM0IsQ0FBQyxDQUFDO0FBQ04sQ0FBQztBQUFBLFNBRWNDLFNBQVNBLENBQUE7RUFBQSxPQUFBQyxVQUFBLENBQUFDLEtBQUEsT0FBQUMsU0FBQTtBQUFBO0FBQUEsU0FBQUYsV0FBQTtFQUFBQSxVQUFBLEdBQUFHLG1GQUFBLGVBQUFDLHNFQUFBLENBQXhCLFNBQUFFLFFBQUE7SUFBQSxJQUFBQyxJQUFBO0lBQUEsT0FBQUgsc0VBQUEsVUFBQUssU0FBQUMsUUFBQTtNQUFBLGtCQUFBQSxRQUFBLENBQUFDLElBQUEsR0FBQUQsUUFBQSxDQUFBRSxJQUFBO1FBQUE7VUFDSSxJQUFJO1lBQ01MLElBQUksR0FBR2pCLE9BQU8sQ0FBQ0QsR0FBRyxDQUFDO1lBQ3pCd0IsT0FBTyxDQUFDQyxHQUFHLENBQUNQLElBQUksQ0FBQztVQUNyQixDQUFDLENBQUMsT0FBQVEsT0FBQSxFQUFNO1lBQ0pGLE9BQU8sQ0FBQ0csS0FBSyxDQUFDLE1BQU0sQ0FBQztVQUN6QjtRQUFDO1FBQUE7VUFBQSxPQUFBTixRQUFBLENBQUFPLElBQUE7TUFBQTtJQUFBLEdBQUFYLE9BQUE7RUFBQSxDQUNKO0VBQUEsT0FBQU4sVUFBQSxDQUFBQyxLQUFBLE9BQUFDLFNBQUE7QUFBQTtBQUNESCxTQUFTLEVBQUU7Ozs7Ozs7O1VDMURYIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LWFzeW5jLWF3YWl0Ly4vMDNfRHppZW5fNC8wM19Bc3luY19Bd2FpdC8wM19aYWRhbmllXzMvanMvYXBwLmpzIiwid2VicGFjazovL2VzNi1hc3luYy1hd2FpdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaHR0cHM6Ly9yYW5kb211c2VyLm1lL2FwaS9cclxuXHJcbi8vIFpkasSZY2llICguY2FyZC1pbWctdG9wKVxyXG4vLyBJbWnEmSBpIE5hendpc2tvICguY2FyZC10aXRsZSlcclxuLy8gRW1haWwgKC5jYXJkLXRleHQpXHJcblxyXG5jb25zdCBpbWFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkLWltZy10b3AnKTtcclxuY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZC10aXRsZScpO1xyXG5jb25zdCBlbWFpbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkLXRleHQnKTtcclxuLy9cclxuLy8gY29uc3QgZmV0Y2hSYW5kb21Vc2VyID0gYXN5bmMgKCkgPT4ge1xyXG4vLyAgICAgdHJ5IHtcclxuLy8gICAgICAgICBjb25zdCByZXNwID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vcmFuZG9tdXNlci5tZS9hcGkvJyk7XHJcbi8vXHJcbi8vICAgICAgICAgY29uc3QgeyByZXN1bHRzIH0gPSBhd2FpdCByZXNwLmpzb24oKTtcclxuLy9cclxuLy8gICAgICAgICByZXR1cm4gcmVzdWx0c1swXTtcclxuLy8gICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbi8vICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbi8vICAgICB9XHJcbi8vIH07XHJcbi8vXHJcbi8vIGNvbnN0IGRyYXdVc2VyID0gYXN5bmMgKCkgPT4ge1xyXG4vLyAgICAgdHJ5IHtcclxuLy8gICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgZmV0Y2hSYW5kb21Vc2VyKCk7XHJcbi8vICAgICAgICAgY29uc29sZS5sb2coJ3VzZXInLCB1c2VyKTtcclxuLy9cclxuLy8gICAgICAgICBpbWFnZS5zcmMgPSB1c2VyLnBpY3R1cmUubGFyZ2U7XHJcbi8vICAgICAgICAgdGl0bGUuaW5uZXJIVE1MID0gdXNlci5uYW1lLnRpdGxlO1xyXG4vLyAgICAgICAgIGVtYWlsLmlubmVySFRNTCA9IHVzZXIuZW1haWw7XHJcbi8vICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4vLyAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4vLyAgICAgfVxyXG4vLyB9O1xyXG4vL1xyXG4vLyBkcmF3VXNlcigpO1xyXG5cclxuY29uc3QgVVJMID0gJ2h0dHBzOi8vcmFuZG9tdXNlci5tZS9hcGkvJ1xyXG5cclxuY29uc3QgZ2V0SW5mbyA9IChhZHJlc3MpID0+IHtcclxuICAgIGNvbnN0IFVSTCA9IGFkcmVzc1xyXG5cclxuICAgIHJldHVybiBmZXRjaChVUkwpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIGlmIChyZXMub2sgJiYgcmVzLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkLFgsSFZFwiKVxyXG4gICAgfSlcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gcHJpbnRJbmZvICgpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGdldEluZm8oVVJMKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICB9IGNhdGNoIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdCxYLEhWQnKVxyXG4gICAgfVxyXG59XHJcbnByaW50SW5mbygpIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiODE4N2U3YTFkMGI2MzQyMThkMWFcIikiXSwibmFtZXMiOlsiaW1hZ2UiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ0aXRsZSIsImVtYWlsIiwiVVJMIiwiZ2V0SW5mbyIsImFkcmVzcyIsImZldGNoIiwidGhlbiIsInJlcyIsIm9rIiwic3RhdHVzIiwianNvbiIsIkVycm9yIiwicHJpbnRJbmZvIiwiX3ByaW50SW5mbyIsImFwcGx5IiwiYXJndW1lbnRzIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJfcmVnZW5lcmF0b3JSdW50aW1lIiwibWFyayIsIl9jYWxsZWUiLCJkYXRhIiwid3JhcCIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJwcmV2IiwibmV4dCIsImNvbnNvbGUiLCJsb2ciLCJfdW51c2VkIiwiZXJyb3IiLCJzdG9wIl0sInNvdXJjZVJvb3QiOiIifQ==