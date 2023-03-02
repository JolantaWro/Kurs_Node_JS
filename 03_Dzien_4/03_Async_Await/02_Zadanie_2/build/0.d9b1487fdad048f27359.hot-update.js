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
          _context.next = 11;
          break;
        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](0);
          messageElement.innerHTML = console.error('Błąd');
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
/******/ 	__webpack_require__.h = () => ("58de5bfa8841a50d7486")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5kOWIxNDg3ZmRhZDA0OGYyNzM1OS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLFdBQVcsR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsZUFBZSxDQUFDO0FBQzNELElBQU1DLGNBQWMsR0FBR0YsUUFBUSxDQUFDQyxhQUFhLENBQUMsVUFBVSxDQUFDO0FBSXpELElBQU1FLFdBQVcsR0FBRyxTQUFkQSxXQUFXQSxDQUFBLEVBQVM7RUFDeEIsT0FBTyxJQUFJQyxPQUFPLENBQUMsVUFBQ0MsT0FBTyxFQUFFQyxNQUFNLEVBQUs7SUFDdEMsSUFBTUMsTUFBTSxHQUFHQyxJQUFJLENBQUNDLEtBQUssQ0FBQ0QsSUFBSSxDQUFDRCxNQUFNLEVBQUUsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDO0lBRWxERyxVQUFVLENBQUMsWUFBTTtNQUNmLElBQUlILE1BQU0sSUFBSSxFQUFFLEVBQUU7UUFDaEJGLE9BQU8sQ0FBQztVQUNOTSxLQUFLLEVBQUVKLE1BQU07VUFDYkssTUFBTSxFQUFFO1FBQ1YsQ0FBQyxDQUFDO01BQ0osQ0FBQyxNQUFNO1FBQ0xOLE1BQU0sQ0FBQztVQUNMSyxLQUFLLEVBQUVKLE1BQU07VUFDYkssTUFBTSxFQUFFLE9BQU87VUFDZkMsUUFBUSxFQUFFO1FBQ1osQ0FBQyxDQUFDO01BQ0o7SUFDRixDQUFDLEVBQUUsSUFBSSxDQUFDO0VBQ1YsQ0FBQyxDQUFDO0FBQ0osQ0FBQztBQUFDLFNBRWFDLFdBQVdBLENBQUE7RUFBQSxPQUFBQyxZQUFBLENBQUFDLEtBQUEsT0FBQUMsU0FBQTtBQUFBO0FBQUEsU0FBQUYsYUFBQTtFQUFBQSxZQUFBLEdBQUFHLG1GQUFBLGVBQUFDLHNFQUFBLENBQTFCLFNBQUFFLFFBQUE7SUFBQSxJQUFBQyxJQUFBO0lBQUEsT0FBQUgsc0VBQUEsVUFBQUssU0FBQUMsUUFBQTtNQUFBLGtCQUFBQSxRQUFBLENBQUFDLElBQUEsR0FBQUQsUUFBQSxDQUFBRSxJQUFBO1FBQUE7VUFBQUYsUUFBQSxDQUFBQyxJQUFBO1VBQUFELFFBQUEsQ0FBQUUsSUFBQTtVQUFBLE9BRXVCeEIsV0FBVyxFQUFFO1FBQUE7VUFBMUJtQixJQUFJLEdBQUFHLFFBQUEsQ0FBQUcsSUFBQTtVQUNWLElBQUlOLElBQUksQ0FBQ1YsTUFBTSxLQUFLLElBQUksRUFBRTtZQUN4QmIsV0FBVyxDQUFDOEIsU0FBUyxHQUFHUCxJQUFJLENBQUNYLEtBQUs7VUFDcEM7VUFDQW1CLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDVCxJQUFJLENBQUM7VUFBQUcsUUFBQSxDQUFBRSxJQUFBO1VBQUE7UUFBQTtVQUFBRixRQUFBLENBQUFDLElBQUE7VUFBQUQsUUFBQSxDQUFBTyxFQUFBLEdBQUFQLFFBQUE7VUFFakJ2QixjQUFjLENBQUMyQixTQUFTLEdBQ3hCQyxPQUFPLENBQUNHLEtBQUssQ0FBQyxNQUFNLENBQUM7UUFBQTtRQUFBO1VBQUEsT0FBQVIsUUFBQSxDQUFBUyxJQUFBO01BQUE7SUFBQSxHQUFBYixPQUFBO0VBQUEsQ0FFeEI7RUFBQSxPQUFBTixZQUFBLENBQUFDLEtBQUEsT0FBQUMsU0FBQTtBQUFBO0FBQ0RILFdBQVcsRUFBRTs7Ozs7Ozs7VUN0Q2IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtYXN5bmMtYXdhaXQvLi8wM19Eemllbl80LzAzX0FzeW5jX0F3YWl0LzAyX1phZGFuaWVfMi9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vZXM2LWFzeW5jLWF3YWl0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB2YWx1ZVJhbmRvbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcmFuZG9tLXZhbHVlXCIpXHJcbmNvbnN0IG1lc3NhZ2VFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtZXNzYWdlXCIpXHJcblxyXG5cclxuXHJcbmNvbnN0IGFzeW5jQWN0aW9uID0gKCkgPT4ge1xyXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICBjb25zdCByYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDApICsgMTtcclxuXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgaWYgKHJhbmRvbSA8PSA1MCkge1xyXG4gICAgICAgIHJlc29sdmUoe1xyXG4gICAgICAgICAgdmFsdWU6IHJhbmRvbSxcclxuICAgICAgICAgIHN0YXR1czogXCJPS1wiXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmVqZWN0KHtcclxuICAgICAgICAgIHZhbHVlOiByYW5kb20sXHJcbiAgICAgICAgICBzdGF0dXM6IFwiRVJST1JcIixcclxuICAgICAgICAgIGVycm9yTXNnOiBcIlZhbHVlIGlzIGdyZWF0ZXIgdGhlbiA1MFwiXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0sIDEyNTApO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gY2hlY2tSYW5kb20oKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBhc3luY0FjdGlvbigpXHJcbiAgICBpZiAoZGF0YS5zdGF0dXMgPT09IFwiT0tcIikge1xyXG4gICAgICB2YWx1ZVJhbmRvbS5pbm5lckhUTUwgPSBkYXRhLnZhbHVlXHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gIH0gY2F0Y2gge1xyXG4gICAgbWVzc2FnZUVsZW1lbnQuaW5uZXJIVE1MID0gXHJcbiAgICBjb25zb2xlLmVycm9yKCdCxYLEhWQnKVxyXG4gIH1cclxufVxyXG5jaGVja1JhbmRvbSgpIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNThkZTViZmE4ODQxYTUwZDc0ODZcIikiXSwibmFtZXMiOlsidmFsdWVSYW5kb20iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJtZXNzYWdlRWxlbWVudCIsImFzeW5jQWN0aW9uIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJyYW5kb20iLCJNYXRoIiwiZmxvb3IiLCJzZXRUaW1lb3V0IiwidmFsdWUiLCJzdGF0dXMiLCJlcnJvck1zZyIsImNoZWNrUmFuZG9tIiwiX2NoZWNrUmFuZG9tIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJfYXN5bmNUb0dlbmVyYXRvciIsIl9yZWdlbmVyYXRvclJ1bnRpbWUiLCJtYXJrIiwiX2NhbGxlZSIsImRhdGEiLCJ3cmFwIiwiX2NhbGxlZSQiLCJfY29udGV4dCIsInByZXYiLCJuZXh0Iiwic2VudCIsImlubmVySFRNTCIsImNvbnNvbGUiLCJsb2ciLCJ0MCIsImVycm9yIiwic3RvcCJdLCJzb3VyY2VSb290IjoiIn0=