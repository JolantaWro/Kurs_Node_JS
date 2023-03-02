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
          console.log(results.name.first);
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
/******/ 	__webpack_require__.h = () => ("17321a369a8ac378a2c7")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5iN2M1YzMzNmNiYTQ0ZjEwNGNmOS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxLQUFLLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGVBQWUsQ0FBQztBQUNyRCxJQUFNQyxLQUFLLEdBQUdGLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGFBQWEsQ0FBQztBQUNuRCxJQUFNRSxLQUFLLEdBQUdILFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFlBQVksQ0FBQztBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUcsR0FBRyxHQUFHLDRCQUE0QjtBQUV4QyxJQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBT0EsQ0FBSUMsTUFBTSxFQUFLO0VBQ3hCLE9BQU9DLEtBQUssQ0FBQ0QsTUFBTSxDQUFDLENBQUNFLElBQUksQ0FBQyxVQUFDQyxHQUFHLEVBQUs7SUFDL0IsSUFBSUEsR0FBRyxDQUFDQyxFQUFFLElBQUlELEdBQUcsQ0FBQ0UsTUFBTSxLQUFLLEdBQUcsRUFBRTtNQUM5QixPQUFPRixHQUFHLENBQUNHLElBQUksRUFBRTtJQUNyQjtJQUNBLE1BQU0sSUFBSUMsS0FBSyxDQUFDLE1BQU0sQ0FBQztFQUMzQixDQUFDLENBQUM7QUFDTixDQUFDO0FBQUEsU0FFY0MsU0FBU0EsQ0FBQTtFQUFBLE9BQUFDLFVBQUEsQ0FBQUMsS0FBQSxPQUFBQyxTQUFBO0FBQUE7QUFBQSxTQUFBRixXQUFBO0VBQUFBLFVBQUEsR0FBQUcsbUZBQUEsZUFBQUMsc0VBQUEsQ0FBeEIsU0FBQUUsUUFBQTtJQUFBLElBQUFDLElBQUEsRUFBQUMsT0FBQTtJQUFBLE9BQUFKLHNFQUFBLFVBQUFNLFNBQUFDLFFBQUE7TUFBQSxrQkFBQUEsUUFBQSxDQUFBQyxJQUFBLEdBQUFELFFBQUEsQ0FBQUUsSUFBQTtRQUFBO1VBQUFGLFFBQUEsQ0FBQUMsSUFBQTtVQUFBRCxRQUFBLENBQUFFLElBQUE7VUFBQSxPQUUyQnZCLE9BQU8sQ0FBQ0QsR0FBRyxDQUFDO1FBQUE7VUFBekJrQixJQUFJLEdBQUFJLFFBQUEsQ0FBQUcsSUFBQTtVQUNKTixPQUFPLEdBQUdELElBQUksQ0FBQ0MsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUMvQjtVQUNBTyxPQUFPLENBQUNDLEdBQUcsQ0FBQ1IsT0FBTyxDQUFDcEIsS0FBSyxDQUFDO1VBQzFCMkIsT0FBTyxDQUFDQyxHQUFHLENBQUNSLE9BQU8sQ0FBQ1MsSUFBSSxDQUFDQyxLQUFLLENBQUM7VUFDL0I7VUFBQVAsUUFBQSxDQUFBRSxJQUFBO1VBQUE7UUFBQTtVQUFBRixRQUFBLENBQUFDLElBQUE7VUFBQUQsUUFBQSxDQUFBUSxFQUFBLEdBQUFSLFFBQUE7VUFFQUksT0FBTyxDQUFDSyxLQUFLLENBQUMsTUFBTSxDQUFDO1FBQUE7UUFBQTtVQUFBLE9BQUFULFFBQUEsQ0FBQVUsSUFBQTtNQUFBO0lBQUEsR0FBQWYsT0FBQTtFQUFBLENBRTVCO0VBQUEsT0FBQU4sVUFBQSxDQUFBQyxLQUFBLE9BQUFDLFNBQUE7QUFBQTtBQUNESCxTQUFTLEVBQUU7Ozs7Ozs7O1VDNURYIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LWFzeW5jLWF3YWl0Ly4vMDNfRHppZW5fNC8wM19Bc3luY19Bd2FpdC8wM19aYWRhbmllXzMvanMvYXBwLmpzIiwid2VicGFjazovL2VzNi1hc3luYy1hd2FpdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaHR0cHM6Ly9yYW5kb211c2VyLm1lL2FwaS9cclxuXHJcbi8vIFpkasSZY2llICguY2FyZC1pbWctdG9wKVxyXG4vLyBJbWnEmSBpIE5hendpc2tvICguY2FyZC10aXRsZSlcclxuLy8gRW1haWwgKC5jYXJkLXRleHQpXHJcblxyXG5jb25zdCBpbWFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkLWltZy10b3AnKTtcclxuY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZC10aXRsZScpO1xyXG5jb25zdCBlbWFpbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkLXRleHQnKTtcclxuLy9cclxuLy8gY29uc3QgZmV0Y2hSYW5kb21Vc2VyID0gYXN5bmMgKCkgPT4ge1xyXG4vLyAgICAgdHJ5IHtcclxuLy8gICAgICAgICBjb25zdCByZXNwID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vcmFuZG9tdXNlci5tZS9hcGkvJyk7XHJcbi8vXHJcbi8vICAgICAgICAgY29uc3QgeyByZXN1bHRzIH0gPSBhd2FpdCByZXNwLmpzb24oKTtcclxuLy9cclxuLy8gICAgICAgICByZXR1cm4gcmVzdWx0c1swXTtcclxuLy8gICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbi8vICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbi8vICAgICB9XHJcbi8vIH07XHJcbi8vXHJcbi8vIGNvbnN0IGRyYXdVc2VyID0gYXN5bmMgKCkgPT4ge1xyXG4vLyAgICAgdHJ5IHtcclxuLy8gICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgZmV0Y2hSYW5kb21Vc2VyKCk7XHJcbi8vICAgICAgICAgY29uc29sZS5sb2coJ3VzZXInLCB1c2VyKTtcclxuLy9cclxuLy8gICAgICAgICBpbWFnZS5zcmMgPSB1c2VyLnBpY3R1cmUubGFyZ2U7XHJcbi8vICAgICAgICAgdGl0bGUuaW5uZXJIVE1MID0gdXNlci5uYW1lLnRpdGxlO1xyXG4vLyAgICAgICAgIGVtYWlsLmlubmVySFRNTCA9IHVzZXIuZW1haWw7XHJcbi8vICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4vLyAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4vLyAgICAgfVxyXG4vLyB9O1xyXG4vL1xyXG4vLyBkcmF3VXNlcigpO1xyXG5cclxuY29uc3QgVVJMID0gJ2h0dHBzOi8vcmFuZG9tdXNlci5tZS9hcGkvJ1xyXG5cclxuY29uc3QgZ2V0SW5mbyA9IChhZHJlc3MpID0+IHtcclxuICAgIHJldHVybiBmZXRjaChhZHJlc3MpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIGlmIChyZXMub2sgJiYgcmVzLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkLFgsSFZFwiKVxyXG4gICAgfSlcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gcHJpbnRJbmZvICgpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGdldEluZm8oVVJMKVxyXG4gICAgICAgIGNvbnN0IHJlc3VsdHMgPSBkYXRhLnJlc3VsdHNbMF1cclxuICAgICAgICAvLyB0aXRsZS5pbm5lckhUTUwgPSBkYXRhLnJcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHRzLmVtYWlsKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdHMubmFtZS5maXJzdClcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXRhLnJlc3VsdHMpXHJcbiAgICB9IGNhdGNoIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdCxYLEhWQnKVxyXG4gICAgfVxyXG59XHJcbnByaW50SW5mbygpIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMTczMjFhMzY5YThhYzM3OGEyYzdcIikiXSwibmFtZXMiOlsiaW1hZ2UiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ0aXRsZSIsImVtYWlsIiwiVVJMIiwiZ2V0SW5mbyIsImFkcmVzcyIsImZldGNoIiwidGhlbiIsInJlcyIsIm9rIiwic3RhdHVzIiwianNvbiIsIkVycm9yIiwicHJpbnRJbmZvIiwiX3ByaW50SW5mbyIsImFwcGx5IiwiYXJndW1lbnRzIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJfcmVnZW5lcmF0b3JSdW50aW1lIiwibWFyayIsIl9jYWxsZWUiLCJkYXRhIiwicmVzdWx0cyIsIndyYXAiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwicHJldiIsIm5leHQiLCJzZW50IiwiY29uc29sZSIsImxvZyIsIm5hbWUiLCJmaXJzdCIsInQwIiwiZXJyb3IiLCJzdG9wIl0sInNvdXJjZVJvb3QiOiIifQ==