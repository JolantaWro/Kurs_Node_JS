"use strict";
self["webpackHotUpdatees6_async_await"](0,{

/***/ 23:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);


var title = document.getElementById('title');
var completed = document.getElementById('completed');
var author = document.getElementById('author');

// https://jsonplaceholder.typicode.com/todos/1 => userId
// https://jsonplaceholder.typicode.com/users/:userId

var checkIfError = function checkIfError(resp) {
  if (!resp.ok || resp.status !== 200) {
    throw new Error();
  }
};
var getUserInfo = /*#__PURE__*/function () {
  var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
    var resp, todo, respoUser, user;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return fetch('https://jsonplaceholder.typicode.com/todos/1');
        case 3:
          resp = _context.sent;
          checkIfError(resp);
          _context.next = 7;
          return resp.json();
        case 7:
          todo = _context.sent;
          _context.next = 10;
          return fetch("https://jsonplaceholder.typicode.com/users/".concat(todo.userId));
        case 10:
          respoUser = _context.sent;
          checkIfError(respoUser);
          _context.next = 14;
          return respoUser.json();
        case 14:
          user = _context.sent;
          if (todo.completed === false) {
            completed.classList.add("");
            completed.innerTekst = "Nie zrobione";
          }
          title.innerHTML = todo.title;
          // completed.innerHTML = todo.completed;
          author.innerHTML = user.name;
          _context.next = 23;
          break;
        case 20:
          _context.prev = 20;
          _context.t0 = _context["catch"](0);
          console.error(_context.t0);
        case 23:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 20]]);
  }));
  return function getUserInfo() {
    return _ref.apply(this, arguments);
  };
}();
getUserInfo();

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("4463c4b1fee4b2aba72b")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4wYzc0Yzc0MjNmOGVkZGUxNWFjMi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLEtBQUssR0FBR0MsUUFBUSxDQUFDQyxjQUFjLENBQUMsT0FBTyxDQUFDO0FBQzlDLElBQU1DLFNBQVMsR0FBR0YsUUFBUSxDQUFDQyxjQUFjLENBQUMsV0FBVyxDQUFDO0FBQ3RELElBQU1FLE1BQU0sR0FBR0gsUUFBUSxDQUFDQyxjQUFjLENBQUMsUUFBUSxDQUFDOztBQUVoRDtBQUNBOztBQUVBLElBQU1HLFlBQVksR0FBRyxTQUFmQSxZQUFZQSxDQUFJQyxJQUFJLEVBQUs7RUFDM0IsSUFBSSxDQUFDQSxJQUFJLENBQUNDLEVBQUUsSUFBSUQsSUFBSSxDQUFDRSxNQUFNLEtBQUssR0FBRyxFQUFFO0lBQ2pDLE1BQU0sSUFBSUMsS0FBSyxFQUFFO0VBQ3JCO0FBQ0osQ0FBQztBQUVELElBQU1DLFdBQVc7RUFBQSxJQUFBQyxJQUFBLEdBQUFDLG1GQUFBLGVBQUFDLHNFQUFBLENBQUcsU0FBQUUsUUFBQTtJQUFBLElBQUFULElBQUEsRUFBQVUsSUFBQSxFQUFBQyxTQUFBLEVBQUFDLElBQUE7SUFBQSxPQUFBTCxzRUFBQSxVQUFBTyxTQUFBQyxRQUFBO01BQUEsa0JBQUFBLFFBQUEsQ0FBQUMsSUFBQSxHQUFBRCxRQUFBLENBQUFFLElBQUE7UUFBQTtVQUFBRixRQUFBLENBQUFDLElBQUE7VUFBQUQsUUFBQSxDQUFBRSxJQUFBO1VBQUEsT0FFT0MsS0FBSyxDQUFDLDhDQUE4QyxDQUFDO1FBQUE7VUFBbEVsQixJQUFJLEdBQUFlLFFBQUEsQ0FBQUksSUFBQTtVQUNWcEIsWUFBWSxDQUFDQyxJQUFJLENBQUM7VUFBQ2UsUUFBQSxDQUFBRSxJQUFBO1VBQUEsT0FFQWpCLElBQUksQ0FBQ29CLElBQUksRUFBRTtRQUFBO1VBQXhCVixJQUFJLEdBQUFLLFFBQUEsQ0FBQUksSUFBQTtVQUFBSixRQUFBLENBQUFFLElBQUE7VUFBQSxPQUNjQyxLQUFLLCtDQUFBRyxNQUFBLENBQStDWCxJQUFJLENBQUNZLE1BQU0sRUFBRztRQUFBO1VBQXBGWCxTQUFTLEdBQUFJLFFBQUEsQ0FBQUksSUFBQTtVQUVmcEIsWUFBWSxDQUFDWSxTQUFTLENBQUM7VUFBQ0ksUUFBQSxDQUFBRSxJQUFBO1VBQUEsT0FDTE4sU0FBUyxDQUFDUyxJQUFJLEVBQUU7UUFBQTtVQUE3QlIsSUFBSSxHQUFBRyxRQUFBLENBQUFJLElBQUE7VUFDVixJQUFJVCxJQUFJLENBQUNiLFNBQVMsS0FBSyxLQUFLLEVBQUU7WUFDMUJBLFNBQVMsQ0FBQzBCLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLEVBQUUsQ0FBQztZQUMzQjNCLFNBQVMsQ0FBQzRCLFVBQVUsR0FBRyxjQUFjO1VBQ3pDO1VBRUEvQixLQUFLLENBQUNnQyxTQUFTLEdBQUdoQixJQUFJLENBQUNoQixLQUFLO1VBQzVCO1VBQ0FJLE1BQU0sQ0FBQzRCLFNBQVMsR0FBR2QsSUFBSSxDQUFDZSxJQUFJO1VBQUNaLFFBQUEsQ0FBQUUsSUFBQTtVQUFBO1FBQUE7VUFBQUYsUUFBQSxDQUFBQyxJQUFBO1VBQUFELFFBQUEsQ0FBQWEsRUFBQSxHQUFBYixRQUFBO1VBRTdCYyxPQUFPLENBQUNDLEtBQUssQ0FBQWYsUUFBQSxDQUFBYSxFQUFBLENBQU87UUFBQztRQUFBO1VBQUEsT0FBQWIsUUFBQSxDQUFBZ0IsSUFBQTtNQUFBO0lBQUEsR0FBQXRCLE9BQUE7RUFBQSxDQUU1QjtFQUFBLGdCQXJCS0wsV0FBV0EsQ0FBQTtJQUFBLE9BQUFDLElBQUEsQ0FBQTJCLEtBQUEsT0FBQUMsU0FBQTtFQUFBO0FBQUEsR0FxQmhCO0FBRUQ3QixXQUFXLEVBQUU7Ozs7Ozs7O1VDcENiIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LWFzeW5jLWF3YWl0Ly4vMDNfRHppZW5fNC8wM19Bc3luY19Bd2FpdC8wMV9aYWRhbmllXzEvanMvYXBwLmpzIiwid2VicGFjazovL2VzNi1hc3luYy1hd2FpdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGUnKTtcclxuY29uc3QgY29tcGxldGVkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbXBsZXRlZCcpO1xyXG5jb25zdCBhdXRob3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXV0aG9yJyk7XHJcblxyXG4vLyBodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vdG9kb3MvMSA9PiB1c2VySWRcclxuLy8gaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3VzZXJzLzp1c2VySWRcclxuXHJcbmNvbnN0IGNoZWNrSWZFcnJvciA9IChyZXNwKSA9PiB7XHJcbiAgICBpZiAoIXJlc3Aub2sgfHwgcmVzcC5zdGF0dXMgIT09IDIwMCkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcigpO1xyXG4gICAgfVxyXG59O1xyXG5cclxuY29uc3QgZ2V0VXNlckluZm8gPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3AgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3RvZG9zLzEnKTtcclxuICAgICAgICBjaGVja0lmRXJyb3IocmVzcCk7XHJcblxyXG4gICAgICAgIGNvbnN0IHRvZG8gPSBhd2FpdCByZXNwLmpzb24oKTtcclxuICAgICAgICBjb25zdCByZXNwb1VzZXIgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3VzZXJzLyR7dG9kby51c2VySWR9YCk7XHJcblxyXG4gICAgICAgIGNoZWNrSWZFcnJvcihyZXNwb1VzZXIpO1xyXG4gICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCByZXNwb1VzZXIuanNvbigpO1xyXG4gICAgICAgIGlmICh0b2RvLmNvbXBsZXRlZCA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgY29tcGxldGVkLmNsYXNzTGlzdC5hZGQoXCJcIilcclxuICAgICAgICAgICAgY29tcGxldGVkLmlubmVyVGVrc3QgPSBcIk5pZSB6cm9iaW9uZVwiXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aXRsZS5pbm5lckhUTUwgPSB0b2RvLnRpdGxlO1xyXG4gICAgICAgIC8vIGNvbXBsZXRlZC5pbm5lckhUTUwgPSB0b2RvLmNvbXBsZXRlZDtcclxuICAgICAgICBhdXRob3IuaW5uZXJIVE1MID0gdXNlci5uYW1lO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgIH1cclxufTtcclxuXHJcbmdldFVzZXJJbmZvKCk7XHJcblxyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI0NDYzYzRiMWZlZTRiMmFiYTcyYlwiKSJdLCJuYW1lcyI6WyJ0aXRsZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjb21wbGV0ZWQiLCJhdXRob3IiLCJjaGVja0lmRXJyb3IiLCJyZXNwIiwib2siLCJzdGF0dXMiLCJFcnJvciIsImdldFVzZXJJbmZvIiwiX3JlZiIsIl9hc3luY1RvR2VuZXJhdG9yIiwiX3JlZ2VuZXJhdG9yUnVudGltZSIsIm1hcmsiLCJfY2FsbGVlIiwidG9kbyIsInJlc3BvVXNlciIsInVzZXIiLCJ3cmFwIiwiX2NhbGxlZSQiLCJfY29udGV4dCIsInByZXYiLCJuZXh0IiwiZmV0Y2giLCJzZW50IiwianNvbiIsImNvbmNhdCIsInVzZXJJZCIsImNsYXNzTGlzdCIsImFkZCIsImlubmVyVGVrc3QiLCJpbm5lckhUTUwiLCJuYW1lIiwidDAiLCJjb25zb2xlIiwiZXJyb3IiLCJzdG9wIiwiYXBwbHkiLCJhcmd1bWVudHMiXSwic291cmNlUm9vdCI6IiJ9