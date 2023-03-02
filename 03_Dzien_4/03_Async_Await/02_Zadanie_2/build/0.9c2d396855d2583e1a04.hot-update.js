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
            _context.next = 8;
            break;
          }
          throw new Error();
        case 8:
          valueRandom.innerHTML = _data.value;
        case 9:
          console.log(_data);
          _context.next = 16;
          break;
        case 12:
          _context.prev = 12;
          _context.t0 = _context["catch"](0);
          messageElement.innerHTML = data.value;
          console.error('Błąd');
        case 16:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 12]]);
  }));
  return _checkRandom.apply(this, arguments);
}
checkRandom();

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("d2b20ce1bd6f65ff715d")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC45YzJkMzk2ODU1ZDI1ODNlMWEwNC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLFdBQVcsR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsZUFBZSxDQUFDO0FBQzNELElBQU1DLGNBQWMsR0FBR0YsUUFBUSxDQUFDQyxhQUFhLENBQUMsVUFBVSxDQUFDO0FBSXpELElBQU1FLFdBQVcsR0FBRyxTQUFkQSxXQUFXQSxDQUFBLEVBQVM7RUFDeEIsT0FBTyxJQUFJQyxPQUFPLENBQUMsVUFBQ0MsT0FBTyxFQUFFQyxNQUFNLEVBQUs7SUFDdEMsSUFBTUMsTUFBTSxHQUFHQyxJQUFJLENBQUNDLEtBQUssQ0FBQ0QsSUFBSSxDQUFDRCxNQUFNLEVBQUUsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDO0lBRWxERyxVQUFVLENBQUMsWUFBTTtNQUNmLElBQUlILE1BQU0sSUFBSSxFQUFFLEVBQUU7UUFDaEJGLE9BQU8sQ0FBQztVQUNOTSxLQUFLLEVBQUVKLE1BQU07VUFDYkssTUFBTSxFQUFFO1FBQ1YsQ0FBQyxDQUFDO01BQ0osQ0FBQyxNQUFNO1FBQ0xOLE1BQU0sQ0FBQztVQUNMSyxLQUFLLEVBQUVKLE1BQU07VUFDYkssTUFBTSxFQUFFLE9BQU87VUFDZkMsUUFBUSxFQUFFO1FBQ1osQ0FBQyxDQUFDO01BQ0o7SUFDRixDQUFDLEVBQUUsSUFBSSxDQUFDO0VBQ1YsQ0FBQyxDQUFDO0FBQ0osQ0FBQztBQUFDLFNBRWFDLFdBQVdBLENBQUE7RUFBQSxPQUFBQyxZQUFBLENBQUFDLEtBQUEsT0FBQUMsU0FBQTtBQUFBO0FBQUEsU0FBQUYsYUFBQTtFQUFBQSxZQUFBLEdBQUFHLG1GQUFBLGVBQUFDLHNFQUFBLENBQTFCLFNBQUFFLFFBQUE7SUFBQSxJQUFBQyxLQUFBO0lBQUEsT0FBQUgsc0VBQUEsVUFBQUssU0FBQUMsUUFBQTtNQUFBLGtCQUFBQSxRQUFBLENBQUFDLElBQUEsR0FBQUQsUUFBQSxDQUFBRSxJQUFBO1FBQUE7VUFBQUYsUUFBQSxDQUFBQyxJQUFBO1VBQUFELFFBQUEsQ0FBQUUsSUFBQTtVQUFBLE9BRXVCeEIsV0FBVyxFQUFFO1FBQUE7VUFBMUJ5QixLQUFJLEdBQUFILFFBQUEsQ0FBQUksSUFBQTtVQUFBLE1BQ04sQ0FBQ0QsS0FBSSxDQUFDaEIsTUFBTSxLQUFLLElBQUk7WUFBQWEsUUFBQSxDQUFBRSxJQUFBO1lBQUE7VUFBQTtVQUFBLE1BRWpCLElBQUlHLEtBQUssRUFBRTtRQUFBO1VBRWpCL0IsV0FBVyxDQUFDZ0MsU0FBUyxHQUFHSCxLQUFJLENBQUNqQixLQUFLO1FBQUE7VUFFcENxQixPQUFPLENBQUNDLEdBQUcsQ0FBQ0wsS0FBSSxDQUFDO1VBQUFILFFBQUEsQ0FBQUUsSUFBQTtVQUFBO1FBQUE7VUFBQUYsUUFBQSxDQUFBQyxJQUFBO1VBQUFELFFBQUEsQ0FBQVMsRUFBQSxHQUFBVCxRQUFBO1VBR2pCdkIsY0FBYyxDQUFDNkIsU0FBUyxHQUFHSCxJQUFJLENBQUNqQixLQUFLO1VBQ3JDcUIsT0FBTyxDQUFDRyxLQUFLLENBQUMsTUFBTSxDQUFDO1FBQUE7UUFBQTtVQUFBLE9BQUFWLFFBQUEsQ0FBQVcsSUFBQTtNQUFBO0lBQUEsR0FBQWYsT0FBQTtFQUFBLENBRXhCO0VBQUEsT0FBQU4sWUFBQSxDQUFBQyxLQUFBLE9BQUFDLFNBQUE7QUFBQTtBQUNESCxXQUFXLEVBQUU7Ozs7Ozs7O1VDMUNiIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LWFzeW5jLWF3YWl0Ly4vMDNfRHppZW5fNC8wM19Bc3luY19Bd2FpdC8wMl9aYWRhbmllXzIvanMvYXBwLmpzIiwid2VicGFjazovL2VzNi1hc3luYy1hd2FpdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgdmFsdWVSYW5kb20gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3JhbmRvbS12YWx1ZVwiKVxyXG5jb25zdCBtZXNzYWdlRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWVzc2FnZVwiKVxyXG5cclxuXHJcblxyXG5jb25zdCBhc3luY0FjdGlvbiA9ICgpID0+IHtcclxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgY29uc3QgcmFuZG9tID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwKSArIDE7XHJcblxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGlmIChyYW5kb20gPD0gNTApIHtcclxuICAgICAgICByZXNvbHZlKHtcclxuICAgICAgICAgIHZhbHVlOiByYW5kb20sXHJcbiAgICAgICAgICBzdGF0dXM6IFwiT0tcIlxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJlamVjdCh7XHJcbiAgICAgICAgICB2YWx1ZTogcmFuZG9tLFxyXG4gICAgICAgICAgc3RhdHVzOiBcIkVSUk9SXCIsXHJcbiAgICAgICAgICBlcnJvck1zZzogXCJWYWx1ZSBpcyBncmVhdGVyIHRoZW4gNTBcIlxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9LCAxMjUwKTtcclxuICB9KTtcclxufTtcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGNoZWNrUmFuZG9tKCkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgYXN5bmNBY3Rpb24oKVxyXG4gICAgaWYgKCFkYXRhLnN0YXR1cyA9PT0gXCJPS1wiKSB7XHJcbiAgICAgIC8vIG1lc3NhZ2VFbGVtZW50LmlubmVySFRNTCA9IGRhdGEudmFsdWVcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB2YWx1ZVJhbmRvbS5pbm5lckhUTUwgPSBkYXRhLnZhbHVlXHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG5cclxuICB9IGNhdGNoIHtcclxuICAgIG1lc3NhZ2VFbGVtZW50LmlubmVySFRNTCA9IGRhdGEudmFsdWVcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0LFgsSFZCcpXHJcbiAgfVxyXG59XHJcbmNoZWNrUmFuZG9tKCkiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJkMmIyMGNlMWJkNmY2NWZmNzE1ZFwiKSJdLCJuYW1lcyI6WyJ2YWx1ZVJhbmRvbSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIm1lc3NhZ2VFbGVtZW50IiwiYXN5bmNBY3Rpb24iLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInJhbmRvbSIsIk1hdGgiLCJmbG9vciIsInNldFRpbWVvdXQiLCJ2YWx1ZSIsInN0YXR1cyIsImVycm9yTXNnIiwiY2hlY2tSYW5kb20iLCJfY2hlY2tSYW5kb20iLCJhcHBseSIsImFyZ3VtZW50cyIsIl9hc3luY1RvR2VuZXJhdG9yIiwiX3JlZ2VuZXJhdG9yUnVudGltZSIsIm1hcmsiLCJfY2FsbGVlIiwiX2RhdGEiLCJ3cmFwIiwiX2NhbGxlZSQiLCJfY29udGV4dCIsInByZXYiLCJuZXh0IiwiZGF0YSIsInNlbnQiLCJFcnJvciIsImlubmVySFRNTCIsImNvbnNvbGUiLCJsb2ciLCJ0MCIsImVycm9yIiwic3RvcCJdLCJzb3VyY2VSb290IjoiIn0=