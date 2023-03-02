"use strict";
self["webpackHotUpdatees6_async_await"](0,{

/***/ 23:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);


var valueRandom = document.querySelector("#random-value");
var messageElement = document.querySelector("#message");
var asyncAction = function asyncAction() {
  return new Promise(function (resolve, reject) {
    var random = Math.floor(Math.random() * 100) + 1;
    setTimeout(function () {
      if (random <= 50) {
        resolve({
          value: random,
          status: "OK"
        });
      } else {
        reject({
          value: random,
          status: "ERROR",
          errorMsg: "Value is greater then 50"
        });
      }
    }, 1250);
  });
};
function checkRandom() {
  return _checkRandom.apply(this, arguments);
}
function _checkRandom() {
  _checkRandom = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return asyncAction();
        case 3:
          _context.next = 8;
          break;
        case 5:
          _context.prev = 5;
          _context.t0 = _context["catch"](0);
          console.error('Błąd');
        case 8:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 5]]);
  }));
  return _checkRandom.apply(this, arguments);
}
checkRandom();

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("03a1e15348f221a4fe26")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5lZDE3Yjg3MDYwMDBjYTc2MGQ2Yy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLFdBQVcsR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsZUFBZSxDQUFDO0FBQzNELElBQU1DLGNBQWMsR0FBR0YsUUFBUSxDQUFDQyxhQUFhLENBQUMsVUFBVSxDQUFDO0FBQ3pELElBQU1FLFdBQVcsR0FBRyxTQUFkQSxXQUFXQSxDQUFBLEVBQVM7RUFDeEIsT0FBTyxJQUFJQyxPQUFPLENBQUMsVUFBQ0MsT0FBTyxFQUFFQyxNQUFNLEVBQUs7SUFDdEMsSUFBTUMsTUFBTSxHQUFHQyxJQUFJLENBQUNDLEtBQUssQ0FBQ0QsSUFBSSxDQUFDRCxNQUFNLEVBQUUsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDO0lBRWxERyxVQUFVLENBQUMsWUFBTTtNQUNmLElBQUlILE1BQU0sSUFBSSxFQUFFLEVBQUU7UUFDaEJGLE9BQU8sQ0FBQztVQUNOTSxLQUFLLEVBQUVKLE1BQU07VUFDYkssTUFBTSxFQUFFO1FBQ1YsQ0FBQyxDQUFDO01BQ0osQ0FBQyxNQUFNO1FBQ0xOLE1BQU0sQ0FBQztVQUNMSyxLQUFLLEVBQUVKLE1BQU07VUFDYkssTUFBTSxFQUFFLE9BQU87VUFDZkMsUUFBUSxFQUFFO1FBQ1osQ0FBQyxDQUFDO01BQ0o7SUFDRixDQUFDLEVBQUUsSUFBSSxDQUFDO0VBQ1YsQ0FBQyxDQUFDO0FBQ0osQ0FBQztBQUFDLFNBRWFDLFdBQVdBLENBQUE7RUFBQSxPQUFBQyxZQUFBLENBQUFDLEtBQUEsT0FBQUMsU0FBQTtBQUFBO0FBQUEsU0FBQUYsYUFBQTtFQUFBQSxZQUFBLEdBQUFHLG1GQUFBLGVBQUFDLHNFQUFBLENBQTFCLFNBQUFFLFFBQUE7SUFBQSxPQUFBRixzRUFBQSxVQUFBSSxTQUFBQyxRQUFBO01BQUEsa0JBQUFBLFFBQUEsQ0FBQUMsSUFBQSxHQUFBRCxRQUFBLENBQUFFLElBQUE7UUFBQTtVQUFBRixRQUFBLENBQUFDLElBQUE7VUFBQUQsUUFBQSxDQUFBRSxJQUFBO1VBQUEsT0FFVXZCLFdBQVcsRUFBRTtRQUFBO1VBQUFxQixRQUFBLENBQUFFLElBQUE7VUFBQTtRQUFBO1VBQUFGLFFBQUEsQ0FBQUMsSUFBQTtVQUFBRCxRQUFBLENBQUFHLEVBQUEsR0FBQUgsUUFBQTtVQUVuQkksT0FBTyxDQUFDQyxLQUFLLENBQUMsTUFBTSxDQUFDO1FBQUE7UUFBQTtVQUFBLE9BQUFMLFFBQUEsQ0FBQU0sSUFBQTtNQUFBO0lBQUEsR0FBQVQsT0FBQTtFQUFBLENBRXhCO0VBQUEsT0FBQU4sWUFBQSxDQUFBQyxLQUFBLE9BQUFDLFNBQUE7QUFBQTtBQUNESCxXQUFXLEVBQUU7Ozs7Ozs7O1VDOUJiIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LWFzeW5jLWF3YWl0Ly4vMDNfRHppZW5fNC8wM19Bc3luY19Bd2FpdC8wMl9aYWRhbmllXzIvanMvYXBwLmpzIiwid2VicGFjazovL2VzNi1hc3luYy1hd2FpdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgdmFsdWVSYW5kb20gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3JhbmRvbS12YWx1ZVwiKVxyXG5jb25zdCBtZXNzYWdlRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWVzc2FnZVwiKVxyXG5jb25zdCBhc3luY0FjdGlvbiA9ICgpID0+IHtcclxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgY29uc3QgcmFuZG9tID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwKSArIDE7XHJcblxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGlmIChyYW5kb20gPD0gNTApIHtcclxuICAgICAgICByZXNvbHZlKHtcclxuICAgICAgICAgIHZhbHVlOiByYW5kb20sXHJcbiAgICAgICAgICBzdGF0dXM6IFwiT0tcIlxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJlamVjdCh7XHJcbiAgICAgICAgICB2YWx1ZTogcmFuZG9tLFxyXG4gICAgICAgICAgc3RhdHVzOiBcIkVSUk9SXCIsXHJcbiAgICAgICAgICBlcnJvck1zZzogXCJWYWx1ZSBpcyBncmVhdGVyIHRoZW4gNTBcIlxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9LCAxMjUwKTtcclxuICB9KTtcclxufTtcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGNoZWNrUmFuZG9tKCkge1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBhc3luY0FjdGlvbigpXHJcbiAgfSBjYXRjaCB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdCxYLEhWQnKVxyXG4gIH1cclxufVxyXG5jaGVja1JhbmRvbSgpIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMDNhMWUxNTM0OGYyMjFhNGZlMjZcIikiXSwibmFtZXMiOlsidmFsdWVSYW5kb20iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJtZXNzYWdlRWxlbWVudCIsImFzeW5jQWN0aW9uIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJyYW5kb20iLCJNYXRoIiwiZmxvb3IiLCJzZXRUaW1lb3V0IiwidmFsdWUiLCJzdGF0dXMiLCJlcnJvck1zZyIsImNoZWNrUmFuZG9tIiwiX2NoZWNrUmFuZG9tIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJfYXN5bmNUb0dlbmVyYXRvciIsIl9yZWdlbmVyYXRvclJ1bnRpbWUiLCJtYXJrIiwiX2NhbGxlZSIsIndyYXAiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwicHJldiIsIm5leHQiLCJ0MCIsImNvbnNvbGUiLCJlcnJvciIsInN0b3AiXSwic291cmNlUm9vdCI6IiJ9