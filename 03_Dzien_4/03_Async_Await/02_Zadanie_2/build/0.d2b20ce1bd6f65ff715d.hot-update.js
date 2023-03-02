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
    var _data;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return asyncAction();
        case 3:
          _data = _context.sent;
          if (!(!_data.status === "OK")) {
            _context.next = 9;
            break;
          }
          messageElement.innerHTML = _data.value;
          throw new Error();
        case 9:
          valueRandom.innerHTML = _data.value;
        case 10:
          console.log(_data);
          _context.next = 17;
          break;
        case 13:
          _context.prev = 13;
          _context.t0 = _context["catch"](0);
          messageElement.innerHTML = data.value;
          console.error('Błąd');
        case 17:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 13]]);
  }));
  return _checkRandom.apply(this, arguments);
}
checkRandom();

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("c12cec4b7c6dc6b2d1a6")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5kMmIyMGNlMWJkNmY2NWZmNzE1ZC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLFdBQVcsR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsZUFBZSxDQUFDO0FBQzNELElBQU1DLGNBQWMsR0FBR0YsUUFBUSxDQUFDQyxhQUFhLENBQUMsVUFBVSxDQUFDO0FBSXpELElBQU1FLFdBQVcsR0FBRyxTQUFkQSxXQUFXQSxDQUFBLEVBQVM7RUFDeEIsT0FBTyxJQUFJQyxPQUFPLENBQUMsVUFBQ0MsT0FBTyxFQUFFQyxNQUFNLEVBQUs7SUFDdEMsSUFBTUMsTUFBTSxHQUFHQyxJQUFJLENBQUNDLEtBQUssQ0FBQ0QsSUFBSSxDQUFDRCxNQUFNLEVBQUUsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDO0lBRWxERyxVQUFVLENBQUMsWUFBTTtNQUNmLElBQUlILE1BQU0sSUFBSSxFQUFFLEVBQUU7UUFDaEJGLE9BQU8sQ0FBQztVQUNOTSxLQUFLLEVBQUVKLE1BQU07VUFDYkssTUFBTSxFQUFFO1FBQ1YsQ0FBQyxDQUFDO01BQ0osQ0FBQyxNQUFNO1FBQ0xOLE1BQU0sQ0FBQztVQUNMSyxLQUFLLEVBQUVKLE1BQU07VUFDYkssTUFBTSxFQUFFLE9BQU87VUFDZkMsUUFBUSxFQUFFO1FBQ1osQ0FBQyxDQUFDO01BQ0o7SUFDRixDQUFDLEVBQUUsSUFBSSxDQUFDO0VBQ1YsQ0FBQyxDQUFDO0FBQ0osQ0FBQztBQUFDLFNBRWFDLFdBQVdBLENBQUE7RUFBQSxPQUFBQyxZQUFBLENBQUFDLEtBQUEsT0FBQUMsU0FBQTtBQUFBO0FBQUEsU0FBQUYsYUFBQTtFQUFBQSxZQUFBLEdBQUFHLG1GQUFBLGVBQUFDLHNFQUFBLENBQTFCLFNBQUFFLFFBQUE7SUFBQSxJQUFBQyxLQUFBO0lBQUEsT0FBQUgsc0VBQUEsVUFBQUssU0FBQUMsUUFBQTtNQUFBLGtCQUFBQSxRQUFBLENBQUFDLElBQUEsR0FBQUQsUUFBQSxDQUFBRSxJQUFBO1FBQUE7VUFBQUYsUUFBQSxDQUFBQyxJQUFBO1VBQUFELFFBQUEsQ0FBQUUsSUFBQTtVQUFBLE9BRXVCeEIsV0FBVyxFQUFFO1FBQUE7VUFBMUJ5QixLQUFJLEdBQUFILFFBQUEsQ0FBQUksSUFBQTtVQUFBLE1BQ04sQ0FBQ0QsS0FBSSxDQUFDaEIsTUFBTSxLQUFLLElBQUk7WUFBQWEsUUFBQSxDQUFBRSxJQUFBO1lBQUE7VUFBQTtVQUN2QnpCLGNBQWMsQ0FBQzRCLFNBQVMsR0FBR0YsS0FBSSxDQUFDakIsS0FBSztVQUFBLE1BQy9CLElBQUlvQixLQUFLLEVBQUU7UUFBQTtVQUVqQmhDLFdBQVcsQ0FBQytCLFNBQVMsR0FBR0YsS0FBSSxDQUFDakIsS0FBSztRQUFBO1VBRXBDcUIsT0FBTyxDQUFDQyxHQUFHLENBQUNMLEtBQUksQ0FBQztVQUFBSCxRQUFBLENBQUFFLElBQUE7VUFBQTtRQUFBO1VBQUFGLFFBQUEsQ0FBQUMsSUFBQTtVQUFBRCxRQUFBLENBQUFTLEVBQUEsR0FBQVQsUUFBQTtVQUdqQnZCLGNBQWMsQ0FBQzRCLFNBQVMsR0FBR0YsSUFBSSxDQUFDakIsS0FBSztVQUNyQ3FCLE9BQU8sQ0FBQ0csS0FBSyxDQUFDLE1BQU0sQ0FBQztRQUFBO1FBQUE7VUFBQSxPQUFBVixRQUFBLENBQUFXLElBQUE7TUFBQTtJQUFBLEdBQUFmLE9BQUE7RUFBQSxDQUV4QjtFQUFBLE9BQUFOLFlBQUEsQ0FBQUMsS0FBQSxPQUFBQyxTQUFBO0FBQUE7QUFDREgsV0FBVyxFQUFFOzs7Ozs7OztVQzFDYiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1hc3luYy1hd2FpdC8uLzAzX0R6aWVuXzQvMDNfQXN5bmNfQXdhaXQvMDJfWmFkYW5pZV8yL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9lczYtYXN5bmMtYXdhaXQvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHZhbHVlUmFuZG9tID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNyYW5kb20tdmFsdWVcIilcclxuY29uc3QgbWVzc2FnZUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21lc3NhZ2VcIilcclxuXHJcblxyXG5cclxuY29uc3QgYXN5bmNBY3Rpb24gPSAoKSA9PiB7XHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgIGNvbnN0IHJhbmRvbSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMCkgKyAxO1xyXG5cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBpZiAocmFuZG9tIDw9IDUwKSB7XHJcbiAgICAgICAgcmVzb2x2ZSh7XHJcbiAgICAgICAgICB2YWx1ZTogcmFuZG9tLFxyXG4gICAgICAgICAgc3RhdHVzOiBcIk9LXCJcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZWplY3Qoe1xyXG4gICAgICAgICAgdmFsdWU6IHJhbmRvbSxcclxuICAgICAgICAgIHN0YXR1czogXCJFUlJPUlwiLFxyXG4gICAgICAgICAgZXJyb3JNc2c6IFwiVmFsdWUgaXMgZ3JlYXRlciB0aGVuIDUwXCJcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSwgMTI1MCk7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5hc3luYyBmdW5jdGlvbiBjaGVja1JhbmRvbSgpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGFzeW5jQWN0aW9uKClcclxuICAgIGlmICghZGF0YS5zdGF0dXMgPT09IFwiT0tcIikge1xyXG4gICAgICBtZXNzYWdlRWxlbWVudC5pbm5lckhUTUwgPSBkYXRhLnZhbHVlXHJcbiAgICAgIHRocm93IG5ldyBFcnJvcigpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdmFsdWVSYW5kb20uaW5uZXJIVE1MID0gZGF0YS52YWx1ZVxyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2coZGF0YSlcclxuXHJcbiAgfSBjYXRjaCB7XHJcbiAgICBtZXNzYWdlRWxlbWVudC5pbm5lckhUTUwgPSBkYXRhLnZhbHVlXHJcbiAgICBjb25zb2xlLmVycm9yKCdCxYLEhWQnKVxyXG4gIH1cclxufVxyXG5jaGVja1JhbmRvbSgpIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYzEyY2VjNGI3YzZkYzZiMmQxYTZcIikiXSwibmFtZXMiOlsidmFsdWVSYW5kb20iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJtZXNzYWdlRWxlbWVudCIsImFzeW5jQWN0aW9uIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJyYW5kb20iLCJNYXRoIiwiZmxvb3IiLCJzZXRUaW1lb3V0IiwidmFsdWUiLCJzdGF0dXMiLCJlcnJvck1zZyIsImNoZWNrUmFuZG9tIiwiX2NoZWNrUmFuZG9tIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJfYXN5bmNUb0dlbmVyYXRvciIsIl9yZWdlbmVyYXRvclJ1bnRpbWUiLCJtYXJrIiwiX2NhbGxlZSIsIl9kYXRhIiwid3JhcCIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJwcmV2IiwibmV4dCIsImRhdGEiLCJzZW50IiwiaW5uZXJIVE1MIiwiRXJyb3IiLCJjb25zb2xlIiwibG9nIiwidDAiLCJlcnJvciIsInN0b3AiXSwic291cmNlUm9vdCI6IiJ9