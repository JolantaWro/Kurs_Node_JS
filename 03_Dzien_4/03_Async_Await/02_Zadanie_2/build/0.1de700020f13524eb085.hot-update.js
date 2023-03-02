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
    var data;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return asyncAction();
        case 3:
          data = _context.sent;
          if (data.status === "OK") {
            valueRandom.innerHTML = data.value;
          }
          console.log(data);
          _context.next = 12;
          break;
        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](0);
          messageElement.innerHTML = 'bląd';
          console.error('Błąd');
        case 12:
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
/******/ 	__webpack_require__.h = () => ("d9b1487fdad048f27359")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4xZGU3MDAwMjBmMTM1MjRlYjA4NS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLFdBQVcsR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsZUFBZSxDQUFDO0FBQzNELElBQU1DLGNBQWMsR0FBR0YsUUFBUSxDQUFDQyxhQUFhLENBQUMsVUFBVSxDQUFDO0FBSXpELElBQU1FLFdBQVcsR0FBRyxTQUFkQSxXQUFXQSxDQUFBLEVBQVM7RUFDeEIsT0FBTyxJQUFJQyxPQUFPLENBQUMsVUFBQ0MsT0FBTyxFQUFFQyxNQUFNLEVBQUs7SUFDdEMsSUFBTUMsTUFBTSxHQUFHQyxJQUFJLENBQUNDLEtBQUssQ0FBQ0QsSUFBSSxDQUFDRCxNQUFNLEVBQUUsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDO0lBRWxERyxVQUFVLENBQUMsWUFBTTtNQUNmLElBQUlILE1BQU0sSUFBSSxFQUFFLEVBQUU7UUFDaEJGLE9BQU8sQ0FBQztVQUNOTSxLQUFLLEVBQUVKLE1BQU07VUFDYkssTUFBTSxFQUFFO1FBQ1YsQ0FBQyxDQUFDO01BQ0osQ0FBQyxNQUFNO1FBQ0xOLE1BQU0sQ0FBQztVQUNMSyxLQUFLLEVBQUVKLE1BQU07VUFDYkssTUFBTSxFQUFFLE9BQU87VUFDZkMsUUFBUSxFQUFFO1FBQ1osQ0FBQyxDQUFDO01BQ0o7SUFDRixDQUFDLEVBQUUsSUFBSSxDQUFDO0VBQ1YsQ0FBQyxDQUFDO0FBQ0osQ0FBQztBQUFDLFNBRWFDLFdBQVdBLENBQUE7RUFBQSxPQUFBQyxZQUFBLENBQUFDLEtBQUEsT0FBQUMsU0FBQTtBQUFBO0FBQUEsU0FBQUYsYUFBQTtFQUFBQSxZQUFBLEdBQUFHLG1GQUFBLGVBQUFDLHNFQUFBLENBQTFCLFNBQUFFLFFBQUE7SUFBQSxJQUFBQyxJQUFBO0lBQUEsT0FBQUgsc0VBQUEsVUFBQUssU0FBQUMsUUFBQTtNQUFBLGtCQUFBQSxRQUFBLENBQUFDLElBQUEsR0FBQUQsUUFBQSxDQUFBRSxJQUFBO1FBQUE7VUFBQUYsUUFBQSxDQUFBQyxJQUFBO1VBQUFELFFBQUEsQ0FBQUUsSUFBQTtVQUFBLE9BRXVCeEIsV0FBVyxFQUFFO1FBQUE7VUFBMUJtQixJQUFJLEdBQUFHLFFBQUEsQ0FBQUcsSUFBQTtVQUNWLElBQUlOLElBQUksQ0FBQ1YsTUFBTSxLQUFLLElBQUksRUFBRTtZQUN4QmIsV0FBVyxDQUFDOEIsU0FBUyxHQUFHUCxJQUFJLENBQUNYLEtBQUs7VUFDcEM7VUFDQW1CLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDVCxJQUFJLENBQUM7VUFBQUcsUUFBQSxDQUFBRSxJQUFBO1VBQUE7UUFBQTtVQUFBRixRQUFBLENBQUFDLElBQUE7VUFBQUQsUUFBQSxDQUFBTyxFQUFBLEdBQUFQLFFBQUE7VUFFakJ2QixjQUFjLENBQUMyQixTQUFTLEdBQUcsTUFBTTtVQUNqQ0MsT0FBTyxDQUFDRyxLQUFLLENBQUMsTUFBTSxDQUFDO1FBQUE7UUFBQTtVQUFBLE9BQUFSLFFBQUEsQ0FBQVMsSUFBQTtNQUFBO0lBQUEsR0FBQWIsT0FBQTtFQUFBLENBRXhCO0VBQUEsT0FBQU4sWUFBQSxDQUFBQyxLQUFBLE9BQUFDLFNBQUE7QUFBQTtBQUNESCxXQUFXLEVBQUU7Ozs7Ozs7O1VDdENiIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LWFzeW5jLWF3YWl0Ly4vMDNfRHppZW5fNC8wM19Bc3luY19Bd2FpdC8wMl9aYWRhbmllXzIvanMvYXBwLmpzIiwid2VicGFjazovL2VzNi1hc3luYy1hd2FpdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgdmFsdWVSYW5kb20gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3JhbmRvbS12YWx1ZVwiKVxyXG5jb25zdCBtZXNzYWdlRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWVzc2FnZVwiKVxyXG5cclxuXHJcblxyXG5jb25zdCBhc3luY0FjdGlvbiA9ICgpID0+IHtcclxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgY29uc3QgcmFuZG9tID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwKSArIDE7XHJcblxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGlmIChyYW5kb20gPD0gNTApIHtcclxuICAgICAgICByZXNvbHZlKHtcclxuICAgICAgICAgIHZhbHVlOiByYW5kb20sXHJcbiAgICAgICAgICBzdGF0dXM6IFwiT0tcIlxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJlamVjdCh7XHJcbiAgICAgICAgICB2YWx1ZTogcmFuZG9tLFxyXG4gICAgICAgICAgc3RhdHVzOiBcIkVSUk9SXCIsXHJcbiAgICAgICAgICBlcnJvck1zZzogXCJWYWx1ZSBpcyBncmVhdGVyIHRoZW4gNTBcIlxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9LCAxMjUwKTtcclxuICB9KTtcclxufTtcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGNoZWNrUmFuZG9tKCkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgYXN5bmNBY3Rpb24oKVxyXG4gICAgaWYgKGRhdGEuc3RhdHVzID09PSBcIk9LXCIpIHtcclxuICAgICAgdmFsdWVSYW5kb20uaW5uZXJIVE1MID0gZGF0YS52YWx1ZVxyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2coZGF0YSlcclxuICB9IGNhdGNoIHtcclxuICAgIG1lc3NhZ2VFbGVtZW50LmlubmVySFRNTCA9ICdibMSFZCdcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0LFgsSFZCcpXHJcbiAgfVxyXG59XHJcbmNoZWNrUmFuZG9tKCkiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJkOWIxNDg3ZmRhZDA0OGYyNzM1OVwiKSJdLCJuYW1lcyI6WyJ2YWx1ZVJhbmRvbSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIm1lc3NhZ2VFbGVtZW50IiwiYXN5bmNBY3Rpb24iLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInJhbmRvbSIsIk1hdGgiLCJmbG9vciIsInNldFRpbWVvdXQiLCJ2YWx1ZSIsInN0YXR1cyIsImVycm9yTXNnIiwiY2hlY2tSYW5kb20iLCJfY2hlY2tSYW5kb20iLCJhcHBseSIsImFyZ3VtZW50cyIsIl9hc3luY1RvR2VuZXJhdG9yIiwiX3JlZ2VuZXJhdG9yUnVudGltZSIsIm1hcmsiLCJfY2FsbGVlIiwiZGF0YSIsIndyYXAiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwicHJldiIsIm5leHQiLCJzZW50IiwiaW5uZXJIVE1MIiwiY29uc29sZSIsImxvZyIsInQwIiwiZXJyb3IiLCJzdG9wIl0sInNvdXJjZVJvb3QiOiIifQ==