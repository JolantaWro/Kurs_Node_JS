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
var checkIfError = function checkIfError(resp) {
  if (!resp.ok || resp.status !== 200) {
    throw new Error();
  }
};
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
    var data;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return asyncAction();
        case 3:
          data = _context.sent;
          // await asyncAction()
          console.log(data);
          valueRandom.innerHTML = "";
          _context.next = 11;
          break;
        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](0);
          console.error('Błąd');
        case 11:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 8]]);
  }));
  return _checkRandom.apply(this, arguments);
}
checkRandom();

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("d612953edf8ce9927e03")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4wM2ExZTE1MzQ4ZjIyMWE0ZmUyNi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLFdBQVcsR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsZUFBZSxDQUFDO0FBQzNELElBQU1DLGNBQWMsR0FBR0YsUUFBUSxDQUFDQyxhQUFhLENBQUMsVUFBVSxDQUFDO0FBRXpELElBQU1FLFlBQVksR0FBRyxTQUFmQSxZQUFZQSxDQUFJQyxJQUFJLEVBQUs7RUFDN0IsSUFBSSxDQUFDQSxJQUFJLENBQUNDLEVBQUUsSUFBSUQsSUFBSSxDQUFDRSxNQUFNLEtBQUssR0FBRyxFQUFFO0lBQ25DLE1BQU0sSUFBSUMsS0FBSyxFQUFFO0VBQ25CO0FBQ0YsQ0FBQztBQUVELElBQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFXQSxDQUFBLEVBQVM7RUFDeEIsT0FBTyxJQUFJQyxPQUFPLENBQUMsVUFBQ0MsT0FBTyxFQUFFQyxNQUFNLEVBQUs7SUFDdEMsSUFBTUMsTUFBTSxHQUFHQyxJQUFJLENBQUNDLEtBQUssQ0FBQ0QsSUFBSSxDQUFDRCxNQUFNLEVBQUUsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDO0lBRWxERyxVQUFVLENBQUMsWUFBTTtNQUNmLElBQUlILE1BQU0sSUFBSSxFQUFFLEVBQUU7UUFDaEJGLE9BQU8sQ0FBQztVQUNOTSxLQUFLLEVBQUVKLE1BQU07VUFDYk4sTUFBTSxFQUFFO1FBQ1YsQ0FBQyxDQUFDO01BQ0osQ0FBQyxNQUFNO1FBQ0xLLE1BQU0sQ0FBQztVQUNMSyxLQUFLLEVBQUVKLE1BQU07VUFDYk4sTUFBTSxFQUFFLE9BQU87VUFDZlcsUUFBUSxFQUFFO1FBQ1osQ0FBQyxDQUFDO01BQ0o7SUFDRixDQUFDLEVBQUUsSUFBSSxDQUFDO0VBQ1YsQ0FBQyxDQUFDO0FBQ0osQ0FBQztBQUFDLFNBRWFDLFdBQVdBLENBQUE7RUFBQSxPQUFBQyxZQUFBLENBQUFDLEtBQUEsT0FBQUMsU0FBQTtBQUFBO0FBQUEsU0FBQUYsYUFBQTtFQUFBQSxZQUFBLEdBQUFHLG1GQUFBLGVBQUFDLHNFQUFBLENBQTFCLFNBQUFFLFFBQUE7SUFBQSxJQUFBQyxJQUFBO0lBQUEsT0FBQUgsc0VBQUEsVUFBQUssU0FBQUMsUUFBQTtNQUFBLGtCQUFBQSxRQUFBLENBQUFDLElBQUEsR0FBQUQsUUFBQSxDQUFBRSxJQUFBO1FBQUE7VUFBQUYsUUFBQSxDQUFBQyxJQUFBO1VBQUFELFFBQUEsQ0FBQUUsSUFBQTtVQUFBLE9BRXVCdkIsV0FBVyxFQUFFO1FBQUE7VUFBMUJrQixJQUFJLEdBQUFHLFFBQUEsQ0FBQUcsSUFBQTtVQUNWO1VBQ0FDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDUixJQUFJLENBQUM7VUFDakIzQixXQUFXLENBQUNvQyxTQUFTLEdBQUcsRUFBRTtVQUFBTixRQUFBLENBQUFFLElBQUE7VUFBQTtRQUFBO1VBQUFGLFFBQUEsQ0FBQUMsSUFBQTtVQUFBRCxRQUFBLENBQUFPLEVBQUEsR0FBQVAsUUFBQTtVQUUxQkksT0FBTyxDQUFDSSxLQUFLLENBQUMsTUFBTSxDQUFDO1FBQUE7UUFBQTtVQUFBLE9BQUFSLFFBQUEsQ0FBQVMsSUFBQTtNQUFBO0lBQUEsR0FBQWIsT0FBQTtFQUFBLENBRXhCO0VBQUEsT0FBQU4sWUFBQSxDQUFBQyxLQUFBLE9BQUFDLFNBQUE7QUFBQTtBQUNESCxXQUFXLEVBQUU7Ozs7Ozs7O1VDeENiIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LWFzeW5jLWF3YWl0Ly4vMDNfRHppZW5fNC8wM19Bc3luY19Bd2FpdC8wMl9aYWRhbmllXzIvanMvYXBwLmpzIiwid2VicGFjazovL2VzNi1hc3luYy1hd2FpdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgdmFsdWVSYW5kb20gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3JhbmRvbS12YWx1ZVwiKVxyXG5jb25zdCBtZXNzYWdlRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWVzc2FnZVwiKVxyXG5cclxuY29uc3QgY2hlY2tJZkVycm9yID0gKHJlc3ApID0+IHtcclxuICBpZiAoIXJlc3Aub2sgfHwgcmVzcC5zdGF0dXMgIT09IDIwMCkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKCk7XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgYXN5bmNBY3Rpb24gPSAoKSA9PiB7XHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgIGNvbnN0IHJhbmRvbSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMCkgKyAxO1xyXG5cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBpZiAocmFuZG9tIDw9IDUwKSB7XHJcbiAgICAgICAgcmVzb2x2ZSh7XHJcbiAgICAgICAgICB2YWx1ZTogcmFuZG9tLFxyXG4gICAgICAgICAgc3RhdHVzOiBcIk9LXCJcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZWplY3Qoe1xyXG4gICAgICAgICAgdmFsdWU6IHJhbmRvbSxcclxuICAgICAgICAgIHN0YXR1czogXCJFUlJPUlwiLFxyXG4gICAgICAgICAgZXJyb3JNc2c6IFwiVmFsdWUgaXMgZ3JlYXRlciB0aGVuIDUwXCJcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSwgMTI1MCk7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5hc3luYyBmdW5jdGlvbiBjaGVja1JhbmRvbSgpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGFzeW5jQWN0aW9uKClcclxuICAgIC8vIGF3YWl0IGFzeW5jQWN0aW9uKClcclxuICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICB2YWx1ZVJhbmRvbS5pbm5lckhUTUwgPSBcIlwiXHJcbiAgfSBjYXRjaCB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdCxYLEhWQnKVxyXG4gIH1cclxufVxyXG5jaGVja1JhbmRvbSgpIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZDYxMjk1M2VkZjhjZTk5MjdlMDNcIikiXSwibmFtZXMiOlsidmFsdWVSYW5kb20iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJtZXNzYWdlRWxlbWVudCIsImNoZWNrSWZFcnJvciIsInJlc3AiLCJvayIsInN0YXR1cyIsIkVycm9yIiwiYXN5bmNBY3Rpb24iLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInJhbmRvbSIsIk1hdGgiLCJmbG9vciIsInNldFRpbWVvdXQiLCJ2YWx1ZSIsImVycm9yTXNnIiwiY2hlY2tSYW5kb20iLCJfY2hlY2tSYW5kb20iLCJhcHBseSIsImFyZ3VtZW50cyIsIl9hc3luY1RvR2VuZXJhdG9yIiwiX3JlZ2VuZXJhdG9yUnVudGltZSIsIm1hcmsiLCJfY2FsbGVlIiwiZGF0YSIsIndyYXAiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwicHJldiIsIm5leHQiLCJzZW50IiwiY29uc29sZSIsImxvZyIsImlubmVySFRNTCIsInQwIiwiZXJyb3IiLCJzdG9wIl0sInNvdXJjZVJvb3QiOiIifQ==